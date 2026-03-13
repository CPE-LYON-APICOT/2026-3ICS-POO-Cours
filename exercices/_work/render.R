# =============================================================================
# render.R - Générateur unifié de documents pédagogiques
# =============================================================================
# Script unique pour tous les fichiers .Rmd :
#   - Fichiers classiques (TP/TD) → PDF, MD, HTML, PDF corrigé, Moodle
#   - Fichiers :::question        → Wooclap CSV, Moodle XML, HTML/PDF r/exams
#
# Tout est piloté par la section `produce:` du YAML header.
#
# Usage:
#   Rscript render.R                              # Tous les .rmd récursivement
#   Rscript render.R fichier1.rmd fichier2.rmd    # Fichiers spécifiques
#   gci "*.rmd" | .\Generate.ps1                  # Pipeline PowerShell
# =============================================================================

library(rmarkdown)
library(stringr)
library(exams)
library(yaml)

# =============================================================================
# Chemins des filtres
# =============================================================================
script_dir <- getwd()
lua_filter        <- normalizePath(file.path(script_dir, "filter.lua"), mustWork = FALSE)
moodle_xml_writer <- normalizePath(file.path(script_dir, "moodle-xml-writer.lua"), mustWork = FALSE)

if (!file.exists(lua_filter)) stop("Filtre Lua introuvable: ", lua_filter)
if (!file.exists(moodle_xml_writer)) stop("Moodle XML writer introuvable: ", moodle_xml_writer)

# =============================================================================
# Configuration r/exams
# =============================================================================
TEMP_DIR <- file.path(tempdir(), "rexams_questions")
dir.create(TEMP_DIR, showWarnings = FALSE, recursive = TRUE)

# =============================================================================
# Dossiers de sortie
# =============================================================================
dirs <- list(
  corrige = "../corriges",
  git     = "../2026-3ICS-POO-Exercices",
  html    = "../html",
  moodle  = "../moodle",
  output  = "../output"
)

if (!dir.exists(dirs$git)) stop("Dossier introuvable: ", dirs$git)

# =============================================================================
# Helpers
# =============================================================================
uses_question_syntax <- function(file) {
  content <- readLines(file, encoding = "UTF-8", warn = FALSE)
  any(str_detect(content, "^:::question"))
}

is_enabled <- function(format_val) {
  !is.null(format_val) && !identical(format_val, FALSE)
}

# =============================================================================
# Déterminer les fichiers à traiter
# =============================================================================
args <- commandArgs(trailingOnly = TRUE)

if (length(args) > 0) {
  rmd_files <- args
  for (f in rmd_files) {
    if (!file.exists(f)) stop("Fichier introuvable: ", f)
  }
  cat("Fichier(s) spécifié(s):", paste(rmd_files, collapse = ", "), "\n")
} else {
  rmd_files <- list.files(pattern = "\\.rmd$", recursive = TRUE, ignore.case = TRUE)
  cat("Tous les fichiers:", paste(rmd_files, collapse = ", "), "\n")
}

cat("Nombre de fichiers:", length(rmd_files), "\n")

# =============================================================================
# Arguments Pandoc
# =============================================================================
pandoc_no_filter <- c("--filter", "pandoc-plantuml", "--wrap=none")
pandoc_with_filter <- c("--filter", "pandoc-plantuml", "--lua-filter", lua_filter, "--wrap=none")

# #############################################################################
#                        FONCTIONS r/exams
# #############################################################################

# -----------------------------------------------------------------------------
# Parse les blocs :::question d'un fichier Rmd
# -----------------------------------------------------------------------------
parse_questions <- function(rmd_file) {
  content <- readLines(rmd_file, encoding = "UTF-8", warn = FALSE)
  full_text <- paste(content, collapse = "\n")

  doc_yaml <- NULL
  yaml_match <- str_match(full_text, regex("^---\\s*\\n(.*?)\\n---", dotall = TRUE))
  if (!is.na(yaml_match[1, 1])) {
    doc_yaml <- yaml::yaml.load(yaml_match[1, 2])
    full_text <- str_replace(full_text, regex("^---\\s*\\n.*?\\n---\\s*\\n?", dotall = TRUE), "")
  }

  blocks <- str_split(full_text, "\\n---\\s*\\n")[[1]]
  questions <- list()

  for (block in blocks) {
    if (str_detect(block, ":::question")) {
      q_match <- str_match(block, regex(":::question\\s*\\n(.*)", dotall = TRUE))
      if (!is.na(q_match[1, 1])) {
        question <- parse_question_block(q_match[1, 2])
        if (!is.null(question)) {
          questions[[length(questions) + 1]] <- question
        }
      }
    }
  }

  list(doc_yaml = doc_yaml, questions = questions)
}

# -----------------------------------------------------------------------------
# Parse un bloc question individuel
# -----------------------------------------------------------------------------
parse_question_block <- function(block_content) {
  parts <- str_split(block_content, "\\n---\\s*\\n", n = 2)[[1]]

  if (length(parts) < 2) {
    yaml_lines <- c()
    content_lines <- c()
    lines <- str_split(block_content, "\\n")[[1]]
    in_yaml <- TRUE
    for (line in lines) {
      if (in_yaml && str_detect(line, "^[a-zA-Z_][a-zA-Z0-9_]*:")) {
        yaml_lines <- c(yaml_lines, line)
      } else {
        in_yaml <- FALSE
        content_lines <- c(content_lines, line)
      }
    }
    yaml_text <- paste(yaml_lines, collapse = "\n")
    content_text <- paste(content_lines, collapse = "\n")
  } else {
    yaml_text <- parts[1]
    content_text <- parts[2]
  }

  meta <- tryCatch(yaml::yaml.load(yaml_text), error = function(e) {
    warning("Erreur parsing YAML: ", e$message)
    list()
  })

  if (is.null(meta$id)) meta$id <- paste0("q", sample(10000:99999, 1))
  if (is.null(meta$type)) meta$type <- "essay"
  if (is.null(meta$title)) meta$title <- meta$id
  if (is.null(meta$points)) meta$points <- 1

  sections <- parse_sections(content_text)

  list(
    meta = meta,
    question = sections$question,
    answers = sections$answers,
    solution = sections$solution,
    explanation = sections$explanation
  )
}

# -----------------------------------------------------------------------------
# Parse les sous-sections d'une question
# -----------------------------------------------------------------------------
parse_sections <- function(content) {
  result <- list(question = "", answers = NULL, solution = NULL, explanation = NULL)
  remaining <- content

  answers_pattern <- ":::answers\\s*\\n(.*?)(?=:::solution|:::explanation|$)"
  answers_match <- str_match(remaining, regex(answers_pattern, dotall = TRUE))
  if (!is.na(answers_match[1, 1])) {
    result$answers <- str_trim(answers_match[1, 2])
    remaining <- str_replace(remaining, regex(answers_pattern, dotall = TRUE), "")
  }

  solution_pattern <- ":::solution\\s*\\n(.*?)(?=:::answers|:::explanation|$)"
  solution_match <- str_match(remaining, regex(solution_pattern, dotall = TRUE))
  if (!is.na(solution_match[1, 1])) {
    result$solution <- str_trim(solution_match[1, 2])
    remaining <- str_replace(remaining, regex(solution_pattern, dotall = TRUE), "")
  }

  explanation_pattern <- ":::explanation\\s*\\n(.*?)(?=:::solution|:::answers|$)"
  explanation_match <- str_match(remaining, regex(explanation_pattern, dotall = TRUE))
  if (!is.na(explanation_match[1, 1])) {
    result$explanation <- str_trim(explanation_match[1, 2])
    remaining <- str_replace(remaining, regex(explanation_pattern, dotall = TRUE), "")
  }

  result$question <- str_trim(remaining)
  result
}

# -----------------------------------------------------------------------------
# Parse les réponses QCM
# -----------------------------------------------------------------------------
parse_answers <- function(answers_text, type) {
  if (is.null(answers_text) || answers_text == "") return(NULL)

  lines <- str_split(answers_text, "\\n")[[1]]
  answers <- list()

  for (line in lines) {
    line <- str_trim(line)
    if (line == "") next
    match <- str_match(line, "^-\\s*\\[([ xX*])\\]\\s*(.+)$")
    if (!is.na(match[1, 1])) {
      answers[[length(answers) + 1]] <- list(
        text = str_trim(match[1, 3]),
        correct = str_to_lower(match[1, 2]) %in% c("x", "*")
      )
    }
  }

  answers
}

# -----------------------------------------------------------------------------
# Génère un fichier .Rmd r/exams valide
# -----------------------------------------------------------------------------
generate_rexams_file <- function(question, output_dir) {
  meta <- question$meta
  q_type <- meta$type

  type_mapping <- list(
    "essay" = "string", "schoice" = "schoice", "mchoice" = "mchoice",
    "num" = "num", "string" = "string", "cloze" = "cloze"
  )
  rexams_type <- type_mapping[[q_type]]
  if (is.null(rexams_type)) { warning("Type inconnu: ", q_type); rexams_type <- "string" }
  is_essay <- (q_type == "essay")

  filename <- paste0(meta$id, ".Rmd")
  filepath <- file.path(output_dir, filename)
  lines <- c()

  lines <- c(lines, "Question", "========", "", question$question, "")

  if (q_type %in% c("schoice", "mchoice")) {
    answers <- parse_answers(question$answers, q_type)
    if (!is.null(answers) && length(answers) > 0) {
      lines <- c(lines, "Answerlist", "----------")
      for (ans in answers) lines <- c(lines, paste0("* ", ans$text))
      lines <- c(lines, "")
    }
  }

  lines <- c(lines, "Solution", "========", "")
  if (!is.null(question$solution)) {
    lines <- c(lines, question$solution)
  } else if (!is.null(question$explanation)) {
    lines <- c(lines, question$explanation)
  } else {
    lines <- c(lines, "Pas de solution fournie.")
  }
  lines <- c(lines, "")

  if (q_type %in% c("schoice", "mchoice")) {
    answers <- parse_answers(question$answers, q_type)
    if (!is.null(answers) && length(answers) > 0) {
      lines <- c(lines, "Answerlist", "----------")
      for (ans in answers) lines <- c(lines, if (ans$correct) "* Correct." else "* Incorrect.")
      lines <- c(lines, "")
    }
  }

  lines <- c(lines, "Meta-information", "================")
  lines <- c(lines, paste0("exname: ", meta$id), paste0("extype: ", rexams_type))

  if (q_type %in% c("schoice", "mchoice")) {
    answers <- parse_answers(question$answers, q_type)
    if (!is.null(answers) && length(answers) > 0) {
      solution_str <- paste(sapply(answers, function(a) if(a$correct) "1" else "0"), collapse = "")
      lines <- c(lines, paste0("exsolution: ", solution_str))
    }
  } else if (q_type == "num") {
    if (!is.null(meta$solution)) lines <- c(lines, paste0("exsolution: ", meta$solution))
    if (!is.null(meta$tolerance)) lines <- c(lines, paste0("extol: ", meta$tolerance))
  } else if (q_type == "string") {
    if (!is.null(meta$solution)) lines <- c(lines, paste0("exsolution: ", meta$solution))
  } else if (is_essay) {
    lines <- c(lines, "exsolution: ")
  }

  lines <- c(lines, paste0("expoints: ", meta$points))

  if (q_type %in% c("schoice", "mchoice")) {
    shuffle <- if (!is.null(meta$shuffle)) meta$shuffle else TRUE
    lines <- c(lines, paste0("exshuffle: ", if(shuffle) "TRUE" else "FALSE"))
  }
  if (!is.null(meta$section)) lines <- c(lines, paste0("exsection: ", meta$section))

  writeLines(lines, filepath, useBytes = TRUE)
  filepath
}

# -----------------------------------------------------------------------------
# Générer le CSV Wooclap
# -----------------------------------------------------------------------------
generate_wooclap_csv <- function(questions) {
  header <- "Type,Title,Correct,Choice,Choice,Choice,Choice,Choice,Choice,Choice"
  rows <- c(header)

  for (q in questions) {
    meta <- q$meta
    wooclap_type <- switch(meta$type,
      schoice = "MCQ", mchoice = "MCQ", num = "GuessNumber",
      essay = "OpenQuestion", string = "OpenQuestion",
      cloze = "FillInTheBlanks", matching = "Matching", sorting = "Sorting", "Other"
    )

    title <- meta$title
    if (is.null(title) || title == "") title <- substr(q$question, 1, 100)
    title <- gsub("[\r\n]+", " ", title)
    title <- gsub(",", ";", title)
    title <- gsub('"', '""', title)

    correct <- ""
    choices <- rep("", 7)

    if (meta$type %in% c("schoice", "mchoice")) {
      answers <- parse_answers(q$answers, meta$type)
      if (!is.null(answers) && length(answers) > 0) {
        correct_indices <- which(sapply(answers, function(a) a$correct))
        if (length(correct_indices) > 0) correct <- correct_indices[1]
        for (i in seq_along(answers)) {
          if (i <= 7) {
            ans_text <- gsub(",", ";", gsub('"', '""', answers[[i]]$text))
            choices[i] <- ans_text
          }
        }
      }
    } else if (meta$type == "num") {
      if (!is.null(meta$solution)) correct <- meta$solution
    } else if (meta$type == "cloze") {
      if (!is.null(q$answers)) {
        cloze_text <- gsub(",", ";", gsub('"', '""', q$answers))
        choices[1] <- cloze_text
      }
    } else if (meta$type == "matching") {
      if (!is.null(q$answers)) {
        lines <- str_split(q$answers, "\\n")[[1]]
        match_pairs <- c()
        for (line in lines) {
          line <- str_trim(line)
          if (str_detect(line, "^-\\s+.*---.*")) {
            pair <- str_replace(line, "^-\\s+", "")
            pair <- gsub(",", ";", gsub('"', '""', pair))
            match_pairs <- c(match_pairs, pair)
          }
        }
        for (i in seq_along(match_pairs)) if (i <= 7) choices[i] <- match_pairs[i]
      }
    } else if (meta$type == "sorting") {
      if (!is.null(q$answers)) {
        lines <- str_split(q$answers, "\\n")[[1]]
        sort_items <- c()
        for (line in lines) {
          line <- str_trim(line)
          if (str_detect(line, "^-\\s+")) {
            item <- str_replace(line, "^-\\s+", "")
            item <- gsub(",", ";", gsub('"', '""', item))
            sort_items <- c(sort_items, item)
          }
        }
        for (i in seq_along(sort_items)) if (i <= 7) choices[i] <- sort_items[i]
      }
    }

    row <- paste0(
      '"', wooclap_type, '",', '"', title, '",', correct, ',',
      '"', choices[1], '",', '"', choices[2], '",', '"', choices[3], '",',
      '"', choices[4], '",', '"', choices[5], '",', '"', choices[6], '",',
      '"', choices[7], '"'
    )
    rows <- c(rows, row)
  }

  paste(rows, collapse = "\n")
}

# -----------------------------------------------------------------------------
# Générer le XML Moodle pour les questions essay
# -----------------------------------------------------------------------------
generate_moodle_essay_xml <- function(essay_questions) {
  escape_xml <- function(text) {
    if (is.null(text)) return("")
    text <- gsub("&", "&amp;", text)
    text <- gsub("<", "&lt;", text)
    text <- gsub(">", "&gt;", text)
    text <- gsub('"', "&quot;", text)
    text <- gsub("'", "&apos;", text)
    text
  }
  md_to_html <- function(text) {
    if (is.null(text) || text == "") return("")
    tmp_md   <- tempfile(fileext = ".md")
    tmp_html <- tempfile(fileext = ".html")
    writeLines(text, tmp_md, useBytes = TRUE)
    rmarkdown::pandoc_convert(
      input = tmp_md, from = "markdown", to = "html",
      output = tmp_html
    )
    result <- paste(readLines(tmp_html, encoding = "UTF-8", warn = FALSE), collapse = "\n")
    unlink(c(tmp_md, tmp_html))
    result
  }

  xml_lines <- c('<?xml version="1.0" encoding="UTF-8"?>', '<quiz>')

  for (q in essay_questions) {
    meta <- q$meta
    question_text <- md_to_html(q$question)
    solution_text <- if (!is.null(q$solution)) md_to_html(q$solution) else ""

    xml_lines <- c(xml_lines,
      '  <question type="essay">',
      paste0('    <name><text>', escape_xml(meta$title), '</text></name>'),
      '    <questiontext format="html">',
      paste0('      <text><![CDATA[', question_text, ']]></text>'),
      '    </questiontext>',
      '    <generalfeedback format="html">',
      paste0('      <text><![CDATA[', solution_text, ']]></text>'),
      '    </generalfeedback>',
      paste0('    <defaultgrade>', meta$points, '</defaultgrade>'),
      '    <penalty>0</penalty>', '    <hidden>0</hidden>',
      '    <responseformat>editor</responseformat>',
      '    <responserequired>1</responserequired>',
      '    <responsefieldlines>15</responsefieldlines>',
      '    <attachments>0</attachments>',
      '    <attachmentsrequired>0</attachmentsrequired>',
      '    <graderinfo format="html">', '      <text></text>', '    </graderinfo>',
      '    <responsetemplate format="html">', '      <text></text>', '    </responsetemplate>',
      paste0('    <tags><tag><text>', escape_xml(meta$id), '</text></tag></tags>'),
      '  </question>'
    )
  }

  xml_lines <- c(xml_lines, '</quiz>')
  paste(xml_lines, collapse = "\n")
}

# -----------------------------------------------------------------------------
# Fusionner deux fichiers XML Moodle
# -----------------------------------------------------------------------------
merge_moodle_xml <- function(file1, file2, output_file) {
  content1 <- paste(readLines(file1, encoding = "UTF-8", warn = FALSE), collapse = "\n")
  content2 <- paste(readLines(file2, encoding = "UTF-8", warn = FALSE), collapse = "\n")

  extract_questions <- function(content) {
    match <- str_match(content, regex("<quiz[^>]*>\\s*(.*?)\\s*</quiz>", dotall = TRUE))
    if (!is.na(match[1, 2])) return(str_trim(match[1, 2]))
    ""
  }

  merged <- paste0(
    '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n',
    extract_questions(content1), '\n',
    extract_questions(content2), '\n',
    '</quiz>'
  )
  writeLines(merged, output_file, useBytes = TRUE)
}

# -----------------------------------------------------------------------------
# Build l'examen complet (fichiers :::question)
# -----------------------------------------------------------------------------
build_exam <- function(rmd_file, output_dir) {
  cat("  === Build Exam ===\n")
  cat("  Fichier source:", rmd_file, "\n")

  parsed <- parse_questions(rmd_file)
  doc_yaml <- parsed$doc_yaml
  questions <- parsed$questions

  cat("  Questions trouvées:", length(questions), "\n")
  if (length(questions) == 0) { warning("Aucune question!"); return(invisible(NULL)) }

  essay_questions <- Filter(function(q) q$meta$type == "essay", questions)
  other_questions <- Filter(function(q) q$meta$type != "essay", questions)
  cat("    - Essay:", length(essay_questions), "\n")
  cat("    - Autres:", length(other_questions), "\n")

  unlink(TEMP_DIR, recursive = TRUE)
  dir.create(TEMP_DIR, showWarnings = FALSE, recursive = TRUE)

  exam_files <- c()
  for (i in seq_along(other_questions)) {
    q <- other_questions[[i]]
    cat("    -", q$meta$id, "(", q$meta$type, ")\n")
    filepath <- generate_rexams_file(q, TEMP_DIR)
    exam_files <- c(exam_files, basename(filepath))
  }

  dir.create(output_dir, showWarnings = FALSE, recursive = TRUE)
  produce <- doc_yaml$produce
  if (is.null(produce)) produce <- list(html = TRUE, pdf = TRUE, moodle = TRUE)
  base_name <- tools::file_path_sans_ext(basename(rmd_file))

  # Export HTML
  if (is_enabled(produce$html) && length(exam_files) > 0) {
    cat("  Export HTML...\n")
    tryCatch({
      exams2html(exam_files, dir = output_dir, name = paste0(base_name, "_html"),
                 edir = TEMP_DIR, template = "plain")
      cat("    -> OK\n")
    }, error = function(e) warning("Erreur HTML: ", e$message))
  }

  # Export PDF
  if (is_enabled(produce$pdf) && length(exam_files) > 0) {
    cat("  Export PDF...\n")
    tryCatch({
      exams2pdf(exam_files, dir = output_dir, name = paste0(base_name, "_pdf"),
                edir = TEMP_DIR, template = "plain-highlight", texengine = "xelatex")
      cat("    -> OK\n")
    }, error = function(e) warning("Erreur PDF: ", e$message))
  }

  # Export Moodle XML
  if (is_enabled(produce$moodle)) {
    cat("  Export Moodle XML...\n")
    moodle_file <- file.path(output_dir, paste0(base_name, ".xml"))

    if (length(exam_files) > 0) {
      tryCatch({
        exams2moodle(exam_files, dir = output_dir, name = paste0(base_name, "_rexams"),
                     edir = TEMP_DIR, mchoice = list(shuffle = TRUE), schoice = list(shuffle = TRUE))
        cat("    -> r/exams OK\n")
      }, error = function(e) warning("Erreur Moodle r/exams: ", e$message))
    }

    if (length(essay_questions) > 0) {
      essay_xml <- generate_moodle_essay_xml(essay_questions)
      essay_file <- file.path(output_dir, paste0(base_name, "_essay.xml"))
      writeLines(essay_xml, essay_file)
      cat("    -> Essay XML OK\n")
    }

    rexams_file <- file.path(output_dir, paste0(base_name, "_rexams.xml"))
    essay_file <- file.path(output_dir, paste0(base_name, "_essay.xml"))

    if (file.exists(rexams_file) && file.exists(essay_file)) {
      merge_moodle_xml(rexams_file, essay_file, moodle_file)
      cat("    -> Fusion OK\n")
    } else if (file.exists(rexams_file)) {
      file.copy(rexams_file, moodle_file, overwrite = TRUE)
    } else if (file.exists(essay_file)) {
      file.copy(essay_file, moodle_file, overwrite = TRUE)
    }
  }

  # Export Wooclap CSV
  if (is_enabled(produce$wooclap)) {
    cat("  Export Wooclap CSV...\n")
    wooclap_file <- file.path(output_dir, paste0(base_name, "_wooclap.csv"))
    tryCatch({
      wooclap_csv <- generate_wooclap_csv(questions)
      writeLines(wooclap_csv, wooclap_file, useBytes = TRUE)
      cat("    -> OK:", wooclap_file, "\n")
    }, error = function(e) warning("Erreur Wooclap: ", e$message))
  }

  cat("  === Build terminé ===\n")
  invisible(list(questions = questions, exam_files = exam_files, output_dir = output_dir))
}

# #############################################################################
#                           BOUCLE PRINCIPALE
# #############################################################################

# Collecter les .md compagnons des .rmd traités (pour copie ciblée à la fin)
companion_md_files <- c()

for (file in rmd_files) {
  cat("\n========================================\n")
  cat("Traitement:", file, "\n")
  cat("========================================\n")

  # Enregistrer le .md compagnon s'il existe (même nom, extension .md)
  md_companion <- sub("\\.[Rr][Mm][Dd]$", ".md", file)
  if (file.exists(md_companion)) {
    companion_md_files <- c(companion_md_files, md_companion)
  }

  if (uses_question_syntax(file)) {
    # =======================================================================
    # FICHIER AVEC :::question -> pipeline r/exams
    # =======================================================================
    cat("-> Syntaxe :::question détectée\n")
    output_exam_dir <- file.path(dirs$output, dirname(file))
    tryCatch({
      build_exam(file, output_exam_dir)
    }, error = function(e) {
      warning("Erreur build_exam pour ", file, ": ", e$message)
    })

  } else {
    # =======================================================================
    # FICHIER CLASSIQUE -> pipeline rmarkdown
    # =======================================================================
    cat("-> Fichier classique\n")

    yaml_header <- rmarkdown::yaml_front_matter(file)
    produce <- yaml_header$produce

    if (is.null(produce)) {
      cat("  Pas de section 'produce', fichier ignoré.\n")
      next
    }

    base_name <- tools::file_path_sans_ext(basename(file))
    subdir <- dirname(file)

    cat("  Formats demandés:",
        paste(names(produce)[sapply(produce, is_enabled)], collapse = ", "), "\n")

    # ----- PDF étudiant (avec filtre) -----
    if (is_enabled(produce$pdf)) {
      out_dir <- file.path(dirs$git, subdir)
      dir.create(out_dir, recursive = TRUE, showWarnings = FALSE)
      render(file,
        output_format = pdf_document(latex_engine = "xelatex", pandoc_args = pandoc_with_filter),
        output_dir = out_dir
      )
      cat("  -> PDF étudiant:", file.path(out_dir, paste0(base_name, ".pdf")), "\n")
      Sys.sleep(1)
    }

    # ----- Markdown (avec filtre) -----
    if (is_enabled(produce$md)) {
      out_dir <- file.path(dirs$git, subdir)
      dir.create(out_dir, recursive = TRUE, showWarnings = FALSE)
      render(file,
        output_format = md_document(variant = "markdown", pandoc_args = pandoc_with_filter),
        output_dir = out_dir
      )
      cat("  -> Markdown:", file.path(out_dir, paste0(base_name, ".md")), "\n")
      Sys.sleep(1)
    }

    # ----- HTML (avec filtre) -----
    if (is_enabled(produce$html)) {
      out_dir <- file.path(dirs$html, subdir)
      dir.create(out_dir, recursive = TRUE, showWarnings = FALSE)
      render(file,
        output_format = html_document(toc = TRUE, pandoc_args = pandoc_with_filter),
        output_dir = out_dir
      )
      cat("  -> HTML:", file.path(out_dir, paste0(base_name, ".html")), "\n")
      Sys.sleep(1)
    }

    # ----- PDF corrigé (sans filtre) -----
    if (isTRUE(produce$create_answers)) {
      out_dir <- file.path(dirs$corrige, subdir)
      dir.create(out_dir, recursive = TRUE, showWarnings = FALSE)
      corrige_name <- paste0("_corrige_", base_name)
      render(file,
        output_format = pdf_document(latex_engine = "xelatex", pandoc_args = pandoc_no_filter),
        output_file = paste0(corrige_name, ".pdf"),
        output_dir = out_dir
      )
      cat("  -> PDF corrigé:", file.path(out_dir, paste0(corrige_name, ".pdf")), "\n")
      Sys.sleep(1)
    }

    # ----- Moodle XML -----
    if (is_enabled(produce$moodle)) {
      out_dir <- file.path(dirs$moodle, subdir)
      dir.create(out_dir, recursive = TRUE, showWarnings = FALSE)
      output_xml <- file.path(out_dir, paste0(base_name, ".xml"))
      knit_md <- knitr::knit(file, output = tempfile(fileext = ".md"), quiet = TRUE)
      rmarkdown::pandoc_convert(
        input = normalizePath(knit_md), from = "markdown", to = "plain",
        output = normalizePath(output_xml, mustWork = FALSE),
        options = c("--lua-filter", moodle_xml_writer, "--wrap=none")
      )
      unlink(knit_md)
      cat("  -> Moodle XML:", output_xml, "\n")
      Sys.sleep(1)
    }
  }
}

# =============================================================================
# Copier uniquement les .md compagnons des .rmd traités vers le dossier git
# =============================================================================
if (length(companion_md_files) > 0) {
  companion_md_files <- unique(companion_md_files)
  cat("\nCopie des .md compagnons:\n")
  for (md_file in companion_md_files) {
    dest <- file.path(dirs$git, md_file)
    dir.create(dirname(dest), recursive = TRUE, showWarnings = FALSE)
    file.copy(md_file, dest, overwrite = TRUE)
    cat("  Copié:", dest, "\n")
  }
}

cat("\n=== Terminé ===\n")
