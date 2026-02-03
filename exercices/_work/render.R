# =============================================================================
# render.R - Générateur de documents pédagogiques
# =============================================================================
# Ce script gère deux types de fichiers :
# 1. Fichiers .Rmd classiques -> HTML, PDF, Markdown (ancien système)
# 2. Fichiers avec syntaxe :::question -> r/exams multi-format (nouveau système)
# =============================================================================

library(rmarkdown)
library(stringr)

# Parse command line arguments
args <- commandArgs(trailingOnly = TRUE)

# Define the Lua filter paths
lua_filter <- "filter.lua"
moodle_xml_writer <- "moodle-xml-writer.lua"
build_exam_script <- "build_exam.R"

# Get the absolute paths
lua_filter <- file.path(getwd(), lua_filter)
moodle_xml_writer <- file.path(getwd(), moodle_xml_writer)
build_exam_script <- file.path(getwd(), build_exam_script)

# Check if the Lua filters exist
if (!file.exists(lua_filter)) {
  stop(paste("Lua filter file not found:", lua_filter))
}
if (!file.exists(moodle_xml_writer)) {
  stop(paste("Moodle XML writer not found:", moodle_xml_writer))
}

# -----------------------------------------------------------------------------
# Fonction: Détecter si un fichier utilise la syntaxe :::question
# -----------------------------------------------------------------------------
uses_question_syntax <- function(file) {
  content <- readLines(file, encoding = "UTF-8", warn = FALSE)
  any(str_detect(content, "^:::question"))
}

# Create directories if they don't exist

public_corrige_dir <- file.path("../corriges")
public_git_dir <- file.path("../2025-3ICS-POO-Exercices")
public_html_dir <- file.path("../html")
public_moodle_dir <- file.path("../moodle")

if (!dir.exists(public_git_dir)) {
  stop("Directory not found: 2025-3ICS-POO-Exercices")
}

# List .Rmd files - either from argument or all files
if (length(args) > 0) {
  # Use the specified file(s)
  rmd_files <- args
  # Verify files exist
  for (f in rmd_files) {
    if (!file.exists(f)) {
      stop(paste("File not found:", f))
    }
  }
  cat("Rendering specified file(s):", paste(rmd_files, collapse = ", "), "\n")
} else {
  # List all .Rmd files recursively
  rmd_files <- list.files(pattern = "\\.rmd$", recursive = TRUE)
  cat("Rendering all files:", paste(rmd_files, collapse = ", "), "\n")
}
print(rmd_files)

c_pandoc_args_no_filter <- c(
  "--filter", "pandoc-plantuml",
  "--wrap=none"
)
c_pandoc_args_lua_filter <-  c(
  "--filter", "pandoc-plantuml",
  "--lua-filter", lua_filter,
  "--wrap=none"
)

# Render each .Rmd file to both PDF and Markdown formats
for (file in rmd_files) {
  cat("\n========================================\n")
  cat("Traitement:", file, "\n")
  cat("========================================\n")
  
  # Vérifier si le fichier utilise la syntaxe :::question (r/exams)
  if (uses_question_syntax(file)) {
    cat("-> Syntaxe :::question détectée, utilisation de build_exam.R\n")
    
    # Charger et exécuter build_exam.R
    source(build_exam_script)
    
    # Déterminer le dossier de sortie
    output_exam_dir <- file.path("../output", dirname(file))
    
    tryCatch({
      build_exam(file, output_exam_dir)
    }, error = function(e) {
      warning("Erreur build_exam: ", e$message)
    })
    
    next  # Passer au fichier suivant
  }
  
  # Ancien système pour les fichiers .Rmd classiques
  cat("-> Syntaxe classique, utilisation du rendu standard\n")
  
  # Read the YAML header of the Rmd file
  yaml_header <- rmarkdown::yaml_front_matter(file)
  # Determine the output formats based on the YAML header
  output_formats <- yaml_header$produce

  output_pdf_dir <- file.path(public_corrige_dir, dirname(file)) 
  output_md_dir <- file.path(public_git_dir, dirname(file)) 
  output_html_dir <- file.path(public_html_dir, dirname(file))

  print(output_formats)
  # Render or copy the file based on the specified output formats
  if (!is.null(output_formats$pdf)) {
    if (!dir.exists(output_pdf_dir)) {
      dir.create(output_pdf_dir, recursive = TRUE)
    }
    # Render to PDF with Lua filter
    render(file,
      output_format = pdf_document(
        latex_engine = "xelatex",
        pandoc_args =
          if (output_formats$pdf$remove_answers) {
            c_pandoc_args_lua_filter
          } else {
            c_pandoc_args_no_filter
          }
      ),
      output_dir = output_pdf_dir
    )
    cat("Rendered to PDF with filter:", file, "\n")
    Sys.sleep(1)
  }

  if (!is.null(output_formats$md)) {
    if (!dir.exists(output_md_dir)) {
      dir.create(output_md_dir, recursive = TRUE)
    }

    # Render to Markdown with Lua filter
    render(file,
      output_format = md_document(
        variant = "markdown",
        pandoc_args =
          if (output_formats$md$remove_answers) {
            c_pandoc_args_lua_filter
          } else {
            c_pandoc_args_no_filter
          },
      ),
      output_dir = output_md_dir
    )
    Sys.sleep(1)
    cat("Rendered to Markdown with filter:", file, "\n")

  }

  if (!is.null(output_formats$html) ) {
    if (!dir.exists(output_html_dir)) {
      dir.create(output_html_dir, recursive = TRUE)
    }
    render(file,
      output_format = html_document(toc = TRUE, pandoc_args =
          if (output_formats$html$remove_answers) {
            c_pandoc_args_lua_filter
          } else {
            c_pandoc_args_no_filter
          }
      ),
      output_dir = output_html_dir
    )
    Sys.sleep(1)
  }

  # Moodle XML export
  if (!is.null(output_formats$moodle)) {
    output_moodle_dir <- file.path(public_moodle_dir, dirname(file))
    if (!dir.exists(output_moodle_dir)) {
      dir.create(output_moodle_dir, recursive = TRUE)
    }
    
    # Get the base filename without extension
    base_name <- tools::file_path_sans_ext(basename(file))
    output_xml_file <- file.path(output_moodle_dir, paste0(base_name, ".xml"))
    
    # First knit the Rmd to md, then convert with pandoc
    knit_md <- knitr::knit(file, output = tempfile(fileext = ".md"), quiet = TRUE)
    
    # Run pandoc with absolute paths
    rmarkdown::pandoc_convert(
      input = normalizePath(knit_md),
      from = "markdown",
      to = "plain",
      output = normalizePath(output_xml_file, mustWork = FALSE),
      options = c("--lua-filter", moodle_xml_writer, "--wrap=none")
    )
    
    # Clean up temp file
    unlink(knit_md)
    
    cat("Exported to Moodle XML:", output_xml_file, "\n")
    Sys.sleep(1)
  }
}


# For all .md files (no .rmd) copy them too into public_git_dir folder
md_files <- list.files(pattern = "\\.md$", recursive = TRUE)

print(md_files)

# Move each .md file to the public_git_dir folder
for (file in md_files) {
  destination <- file.path(public_git_dir, file)
  destination_dir <- dirname(destination)
  if (!dir.exists(destination_dir)) {
    dir.create(destination_dir, recursive = TRUE)
  }
  file.copy(file, destination, overwrite = TRUE)
  cat("Moved .md file to:", destination, "\n")
}