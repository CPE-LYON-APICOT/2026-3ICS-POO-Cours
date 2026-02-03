# =============================================================================
# build_exam.R - Générateur d'examens r/exams depuis un fichier Rmd master
# =============================================================================
# Ce script parse un fichier .Rmd contenant des questions au format :::question
# et génère automatiquement les fichiers r/exams pour export multi-format.
# =============================================================================

library(exams)
library(stringr)
library(yaml)

# -----------------------------------------------------------------------------
# Configuration
# -----------------------------------------------------------------------------
TEMP_DIR <- file.path(tempdir(), "rexams_questions")
OUTPUT_DIR <- "output"

# Créer les dossiers de sortie
dir.create(TEMP_DIR, showWarnings = FALSE, recursive = TRUE)
dir.create(OUTPUT_DIR, showWarnings = FALSE, recursive = TRUE)

# -----------------------------------------------------------------------------
# Fonction: Parse les blocs :::question d'un fichier Rmd
# -----------------------------------------------------------------------------
parse_questions <- function(rmd_file) {
  # Lire le fichier entier
  content <- readLines(rmd_file, encoding = "UTF-8", warn = FALSE)
  full_text <- paste(content, collapse = "\n")
  
  # Extraire le YAML header du document
  doc_yaml <- NULL
  yaml_match <- str_match(full_text, regex("^---\\s*\\n(.*?)\\n---", dotall = TRUE))
  if (!is.na(yaml_match[1, 1])) {
    doc_yaml <- yaml::yaml.load(yaml_match[1, 2])
    # Retirer le header YAML du contenu
    full_text <- str_replace(full_text, regex("^---\\s*\\n.*?\\n---\\s*\\n?", dotall = TRUE), "")
  }
  
  # Séparer le document par --- (séparateur de questions)
  # On split sur les lignes contenant uniquement ---
  blocks <- str_split(full_text, "\\n---\\s*\\n")[[1]]
  
  questions <- list()
  
  for (block in blocks) {
    # Vérifier si ce bloc contient une question
    if (str_detect(block, ":::question")) {
      # Extraire le contenu après :::question
      q_match <- str_match(block, regex(":::question\\s*\\n(.*)", dotall = TRUE))
      if (!is.na(q_match[1, 1])) {
        block_content <- q_match[1, 2]
        question <- parse_question_block(block_content)
        if (!is.null(question)) {
          questions[[length(questions) + 1]] <- question
        }
      }
    }
  }
  
  return(list(
    doc_yaml = doc_yaml,
    questions = questions
  ))
}

# -----------------------------------------------------------------------------
# Fonction: Parse un bloc question individuel
# -----------------------------------------------------------------------------
parse_question_block <- function(block_content) {
  # Séparer les métadonnées YAML du contenu
  # Le YAML est séparé du contenu par ---
  parts <- str_split(block_content, "\\n---\\s*\\n", n = 2)[[1]]
  
  if (length(parts) < 2) {
    # Pas de séparateur ---, tout est contenu, on cherche le YAML inline
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
  
  # Parser le YAML des métadonnées
  meta <- tryCatch({
    yaml::yaml.load(yaml_text)
  }, error = function(e) {
    warning("Erreur parsing YAML: ", e$message)
    list()
  })
  
  # Valeurs par défaut
  if (is.null(meta$id)) meta$id <- paste0("q", sample(10000:99999, 1))
  if (is.null(meta$type)) meta$type <- "essay"
  if (is.null(meta$title)) meta$title <- meta$id
  if (is.null(meta$points)) meta$points <- 1
  
  # Parser les sous-sections
  sections <- parse_sections(content_text)
  
  return(list(
    meta = meta,
    question = sections$question,
    answers = sections$answers,
    solution = sections$solution,
    explanation = sections$explanation
  ))
}

# -----------------------------------------------------------------------------
# Fonction: Parse les sous-sections d'une question
# -----------------------------------------------------------------------------
parse_sections <- function(content) {
  result <- list(
    question = "",
    answers = NULL,
    solution = NULL,
    explanation = NULL
  )
  
  remaining <- content
  
  # Extraire :::answers (tout jusqu'à la prochaine section ou fin)
  answers_pattern <- ":::answers\\s*\\n(.*?)(?=:::solution|:::explanation|$)"
  answers_match <- str_match(remaining, regex(answers_pattern, dotall = TRUE))
  if (!is.na(answers_match[1, 1])) {
    result$answers <- str_trim(answers_match[1, 2])
    remaining <- str_replace(remaining, regex(answers_pattern, dotall = TRUE), "")
  }
  
  # Extraire :::solution
  solution_pattern <- ":::solution\\s*\\n(.*?)(?=:::answers|:::explanation|$)"
  solution_match <- str_match(remaining, regex(solution_pattern, dotall = TRUE))
  if (!is.na(solution_match[1, 1])) {
    result$solution <- str_trim(solution_match[1, 2])
    remaining <- str_replace(remaining, regex(solution_pattern, dotall = TRUE), "")
  }
  
  # Extraire :::explanation
  explanation_pattern <- ":::explanation\\s*\\n(.*?)(?=:::solution|:::answers|$)"
  explanation_match <- str_match(remaining, regex(explanation_pattern, dotall = TRUE))
  if (!is.na(explanation_match[1, 1])) {
    result$explanation <- str_trim(explanation_match[1, 2])
    remaining <- str_replace(remaining, regex(explanation_pattern, dotall = TRUE), "")
  }
  
  # Le reste est la question
  result$question <- str_trim(remaining)
  
  return(result)
}

# -----------------------------------------------------------------------------
# Fonction: Parse les réponses QCM depuis le bloc :::answers
# -----------------------------------------------------------------------------
parse_answers <- function(answers_text, type) {
  if (is.null(answers_text) || answers_text == "") {
    return(NULL)
  }
  
  lines <- str_split(answers_text, "\\n")[[1]]
  answers <- list()
  
  for (line in lines) {
    line <- str_trim(line)
    if (line == "") next
    
    # Format: - [x] Réponse correcte  ou  - [ ] Réponse incorrecte
    match <- str_match(line, "^-\\s*\\[([ xX*])\\]\\s*(.+)$")
    
    if (!is.na(match[1, 1])) {
      is_correct <- str_to_lower(match[1, 2]) %in% c("x", "*")
      text <- str_trim(match[1, 3])
      answers[[length(answers) + 1]] <- list(
        text = text,
        correct = is_correct
      )
    }
  }
  
  return(answers)
}

# -----------------------------------------------------------------------------
# Fonction: Génère un fichier .Rmd r/exams valide
# -----------------------------------------------------------------------------
generate_rexams_file <- function(question, output_dir) {
  meta <- question$meta
  q_type <- meta$type
  
  # Mapper les types personnalisés vers les types r/exams
  # essay -> string (r/exams n'a pas de type essay natif, on utilise string sans solution)
  type_mapping <- list(
    "essay" = "string",
    "schoice" = "schoice",
    "mchoice" = "mchoice",
    "num" = "num",
    "string" = "string",
    "cloze" = "cloze"
  )
  
  rexams_type <- type_mapping[[q_type]]
  if (is.null(rexams_type)) {
    warning("Type inconnu: ", q_type, ", utilisation de 'string'")
    rexams_type <- "string"
  }
  
  is_essay <- (q_type == "essay")
  
  # Nom du fichier
  filename <- paste0(meta$id, ".Rmd")
  filepath <- file.path(output_dir, filename)
  
  # Construire le contenu r/exams
  lines <- c()
  
  # Question text
  lines <- c(lines, "Question")
  lines <- c(lines, "========")
  lines <- c(lines, "")
  lines <- c(lines, question$question)
  lines <- c(lines, "")
  
  # Gérer les différents types
  if (q_type %in% c("schoice", "mchoice")) {
    answers <- parse_answers(question$answers, q_type)
    
    if (!is.null(answers) && length(answers) > 0) {
      # Answerlist
      lines <- c(lines, "Answerlist")
      lines <- c(lines, "----------")
      for (ans in answers) {
        lines <- c(lines, paste0("* ", ans$text))
      }
      lines <- c(lines, "")
    }
  }
  
  # Solution
  lines <- c(lines, "Solution")
  lines <- c(lines, "========")
  lines <- c(lines, "")
  
  if (!is.null(question$solution)) {
    lines <- c(lines, question$solution)
  } else if (!is.null(question$explanation)) {
    lines <- c(lines, question$explanation)
  } else {
    lines <- c(lines, "Pas de solution fournie.")
  }
  lines <- c(lines, "")
  
  # Solution list pour QCM
  if (q_type %in% c("schoice", "mchoice")) {
    answers <- parse_answers(question$answers, q_type)
    if (!is.null(answers) && length(answers) > 0) {
      lines <- c(lines, "Answerlist")
      lines <- c(lines, "----------")
      for (ans in answers) {
        if (ans$correct) {
          lines <- c(lines, "* Correct.")
        } else {
          lines <- c(lines, "* Incorrect.")
        }
      }
      lines <- c(lines, "")
    }
  }
  
  # Meta-information
  lines <- c(lines, "Meta-information")
  lines <- c(lines, "================")
  lines <- c(lines, paste0("exname: ", meta$id))
  lines <- c(lines, paste0("extype: ", rexams_type))
  
  # exsolution selon le type
  if (q_type %in% c("schoice", "mchoice")) {
    answers <- parse_answers(question$answers, q_type)
    if (!is.null(answers) && length(answers) > 0) {
      solution_str <- paste(sapply(answers, function(a) if(a$correct) "1" else "0"), collapse = "")
      lines <- c(lines, paste0("exsolution: ", solution_str))
    }
  } else if (q_type == "num") {
    if (!is.null(meta$solution)) {
      lines <- c(lines, paste0("exsolution: ", meta$solution))
    }
    if (!is.null(meta$tolerance)) {
      lines <- c(lines, paste0("extol: ", meta$tolerance))
    }
  } else if (q_type == "string") {
    if (!is.null(meta$solution)) {
      lines <- c(lines, paste0("exsolution: ", meta$solution))
    }
  } else if (is_essay) {
    # Pour les questions essay, on met une solution vide
    # Moodle les traitera comme des questions ouvertes
    lines <- c(lines, "exsolution: ")
  }
  
  # Points
  lines <- c(lines, paste0("expoints: ", meta$points))
  
  # Shuffle pour QCM
  if (q_type %in% c("schoice", "mchoice")) {
    shuffle <- if (!is.null(meta$shuffle)) meta$shuffle else TRUE
    lines <- c(lines, paste0("exshuffle: ", if(shuffle) "TRUE" else "FALSE"))
  }
  
  # Section si spécifiée
  if (!is.null(meta$section)) {
    lines <- c(lines, paste0("exsection: ", meta$section))
  }
  
  # Écrire le fichier
  writeLines(lines, filepath, useBytes = TRUE)
  
  return(filepath)
}

# -----------------------------------------------------------------------------
# Fonction: Traite les diagrammes PlantUML dans le contenu
# -----------------------------------------------------------------------------
process_plantuml <- function(content, output_dir) {
  # Pattern pour les blocs plantuml
  pattern <- "```plantuml\\s*\\n(.*?)```"
  
  matches <- str_match_all(content, regex(pattern, dotall = TRUE))[[1]]
  
  if (nrow(matches) > 0) {
    for (i in 1:nrow(matches)) {
      uml_code <- matches[i, 2]
      
      # Générer un nom unique pour l'image
      img_name <- paste0("uml_", digest::digest(uml_code, algo = "md5"), ".png")
      img_path <- file.path(output_dir, img_name)
      
      # Générer l'image via PlantUML (si disponible)
      tryCatch({
        # Créer un fichier temporaire avec le code UML
        uml_file <- tempfile(fileext = ".puml")
        writeLines(paste0("@startuml\n", uml_code, "\n@enduml"), uml_file)
        
        # Appeler plantuml
        system2("plantuml", args = c("-tpng", "-o", output_dir, uml_file), 
                stdout = FALSE, stderr = FALSE)
        
        # Remplacer le bloc par une image
        img_tag <- paste0("![](", img_name, ")")
        content <- str_replace(content, fixed(matches[i, 1]), img_tag)
        
        unlink(uml_file)
      }, error = function(e) {
        warning("PlantUML non disponible: ", e$message)
      })
    }
  }
  
  return(content)
}

# -----------------------------------------------------------------------------
# Fonction: Générer le CSV Wooclap pour toutes les questions
# -----------------------------------------------------------------------------
generate_wooclap_csv <- function(questions) {
  # En-tête CSV Wooclap
  header <- "Type,Title,Correct,Choice,Choice,Choice,Choice,Choice,Choice,Choice"
  
  rows <- c(header)
  
  for (q in questions) {
    meta <- q$meta
    
    # Mapper les types r/exams -> Wooclap
    wooclap_type <- switch(meta$type,
      schoice = "MCQ",
      mchoice = "MCQ",
      num     = "GuessNumber",
      essay   = "OpenQuestion",
      string  = "OpenQuestion",
      cloze   = "FillInTheBlanks",
      "Other"
    )
    
    # Titre (nettoyer les retours à la ligne)
    title <- meta$title
    if (is.null(title) || title == "") {
      title <- substr(q$question, 1, 100)
    }
    title <- gsub("[\r\n]+", " ", title)
    title <- gsub(",", ";", title)  # Échapper les virgules
    title <- gsub('"', '""', title)  # Échapper les guillemets
    
    # Correct answer index
    correct <- ""
    
    # Choix de réponses
    choices <- rep("", 7)
    
    if (meta$type %in% c("schoice", "mchoice")) {
      answers <- parse_answers(q$answers, meta$type)
      if (!is.null(answers) && length(answers) > 0) {
        # Trouver les réponses correctes
        correct_indices <- which(sapply(answers, function(a) a$correct))
        if (length(correct_indices) > 0) {
          correct <- correct_indices[1]  # Wooclap prend le premier pour MCQ
        }
        
        # Remplir les choix
        for (i in seq_along(answers)) {
          if (i <= 7) {
            ans_text <- answers[[i]]$text
            ans_text <- gsub(",", ";", ans_text)
            ans_text <- gsub('"', '""', ans_text)
            choices[i] <- ans_text
          }
        }
      }
    } else if (meta$type == "num") {
      # Pour les questions numériques
      if (!is.null(meta$solution)) {
        correct <- meta$solution
      }
    } else if (meta$type == "cloze") {
      # Pour les textes à trous, le contenu va dans Choice
      cloze_text <- gsub(",", ";", q$question)
      cloze_text <- gsub('"', '""', cloze_text)
      choices[1] <- cloze_text
    }
    
    # Construire la ligne CSV
    row <- paste0(
      '"', wooclap_type, '",',
      '"', title, '",',
      correct, ',',
      '"', choices[1], '",',
      '"', choices[2], '",',
      '"', choices[3], '",',
      '"', choices[4], '",',
      '"', choices[5], '",',
      '"', choices[6], '",',
      '"', choices[7], '"'
    )
    
    rows <- c(rows, row)
  }
  
  return(paste(rows, collapse = "\n"))
}

# -----------------------------------------------------------------------------
# Fonction: Générer le XML Moodle pour les questions essay
# -----------------------------------------------------------------------------
generate_moodle_essay_xml <- function(essay_questions) {
  xml_lines <- c(
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<quiz>'
  )
  
  for (q in essay_questions) {
    meta <- q$meta
    
    # Échapper les caractères XML
    escape_xml <- function(text) {
      if (is.null(text)) return("")
      text <- gsub("&", "&amp;", text)
      text <- gsub("<", "&lt;", text)
      text <- gsub(">", "&gt;", text)
      text <- gsub('"', "&quot;", text)
      text <- gsub("'", "&apos;", text)
      return(text)
    }
    
    # Convertir le markdown en HTML basique
    md_to_html <- function(text) {
      if (is.null(text)) return("")
      # Code blocks
      text <- gsub("```([a-z]*)\\n(.*?)```", "<pre><code>\\2</code></pre>", text, perl = TRUE)
      # Inline code
      text <- gsub("`([^`]+)`", "<code>\\1</code>", text)
      # Bold
      text <- gsub("\\*\\*([^*]+)\\*\\*", "<strong>\\1</strong>", text)
      # Italic
      text <- gsub("\\*([^*]+)\\*", "<em>\\1</em>", text)
      # Paragraphes
      text <- gsub("\n\n", "</p><p>", text)
      text <- paste0("<p>", text, "</p>")
      return(text)
    }
    
    question_text <- md_to_html(q$question)
    solution_text <- if (!is.null(q$solution)) md_to_html(q$solution) else ""
    
    # Catégorie/section
    category <- if (!is.null(meta$section)) meta$section else "Default"
    
    xml_lines <- c(xml_lines,
      '  <question type="essay">',
      paste0('    <name><text>', escape_xml(meta$title), '</text></name>'),
      paste0('    <questiontext format="html">'),
      paste0('      <text><![CDATA[', question_text, ']]></text>'),
      '    </questiontext>',
      '    <generalfeedback format="html">',
      paste0('      <text><![CDATA[', solution_text, ']]></text>'),
      '    </generalfeedback>',
      paste0('    <defaultgrade>', meta$points, '</defaultgrade>'),
      '    <penalty>0</penalty>',
      '    <hidden>0</hidden>',
      '    <responseformat>editor</responseformat>',
      '    <responserequired>1</responserequired>',
      '    <responsefieldlines>15</responsefieldlines>',
      '    <attachments>0</attachments>',
      '    <attachmentsrequired>0</attachmentsrequired>',
      '    <graderinfo format="html">',
      '      <text></text>',
      '    </graderinfo>',
      '    <responsetemplate format="html">',
      '      <text></text>',
      '    </responsetemplate>',
      paste0('    <tags><tag><text>', escape_xml(meta$id), '</text></tag></tags>'),
      '  </question>'
    )
  }
  
  xml_lines <- c(xml_lines, '</quiz>')
  
  return(paste(xml_lines, collapse = "\n"))
}

# -----------------------------------------------------------------------------
# Fonction: Fusionner deux fichiers XML Moodle
# -----------------------------------------------------------------------------
merge_moodle_xml <- function(file1, file2, output_file) {
  # Lire les deux fichiers
  content1 <- paste(readLines(file1, encoding = "UTF-8", warn = FALSE), collapse = "\n")
  content2 <- paste(readLines(file2, encoding = "UTF-8", warn = FALSE), collapse = "\n")
  
  # Extraire les questions de chaque fichier (tout entre <quiz> et </quiz>)
  extract_questions <- function(content) {
    match <- str_match(content, regex("<quiz[^>]*>\\s*(.*?)\\s*</quiz>", dotall = TRUE))
    if (!is.na(match[1, 2])) {
      return(str_trim(match[1, 2]))
    }
    return("")
  }
  
  questions1 <- extract_questions(content1)
  questions2 <- extract_questions(content2)
  
  # Créer le fichier fusionné
  merged <- paste0(
    '<?xml version="1.0" encoding="UTF-8"?>\n',
    '<quiz>\n',
    questions1, '\n',
    questions2, '\n',
    '</quiz>'
  )
  
  writeLines(merged, output_file, useBytes = TRUE)
}

# -----------------------------------------------------------------------------
# Fonction principale: Build l'examen complet
# -----------------------------------------------------------------------------
build_exam <- function(rmd_file, output_dir = OUTPUT_DIR) {
  cat("=== Build Exam ===\n")
  cat("Fichier source:", rmd_file, "\n")
  
  # Vérifier que le fichier existe
  if (!file.exists(rmd_file)) {
    stop("Fichier non trouvé: ", rmd_file)
  }
  
  # Parser le fichier
  cat("Parsing des questions...\n")
  parsed <- parse_questions(rmd_file)
  
  doc_yaml <- parsed$doc_yaml
  questions <- parsed$questions
  
  cat("Nombre de questions trouvées:", length(questions), "\n")
  
  if (length(questions) == 0) {
    warning("Aucune question trouvée dans le fichier!")
    return(invisible(NULL))
  }
  
  # Séparer les questions essay des autres
  essay_questions <- Filter(function(q) q$meta$type == "essay", questions)
  other_questions <- Filter(function(q) q$meta$type != "essay", questions)
  
  cat("  - Questions essay:", length(essay_questions), "\n")
  cat("  - Autres questions:", length(other_questions), "\n")
  
  # Créer le dossier temporaire pour les fichiers r/exams
  unlink(TEMP_DIR, recursive = TRUE)
  dir.create(TEMP_DIR, showWarnings = FALSE, recursive = TRUE)
  
  # Générer les fichiers r/exams (seulement pour les non-essay)
  cat("Génération des fichiers r/exams...\n")
  exam_files <- c()
  
  for (i in seq_along(other_questions)) {
    q <- other_questions[[i]]
    cat("  -", q$meta$id, "(", q$meta$type, ")\n")
    
    filepath <- generate_rexams_file(q, TEMP_DIR)
    exam_files <- c(exam_files, basename(filepath))
  }
  
  # Créer le dossier de sortie
  dir.create(output_dir, showWarnings = FALSE, recursive = TRUE)
  
  # Déterminer les formats de sortie
  produce <- doc_yaml$produce
  if (is.null(produce)) {
    produce <- list(html = TRUE, pdf = TRUE, md = TRUE, moodle = TRUE)
  }
  
  # Nom de base pour les fichiers de sortie
  base_name <- tools::file_path_sans_ext(basename(rmd_file))
  
  # Export HTML (uniquement les questions non-essay)
  if ((isTRUE(produce$html) || is.list(produce$html)) && length(exam_files) > 0) {
    cat("Export HTML...\n")
    tryCatch({
      exams2html(exam_files, 
                 dir = output_dir, 
                 name = paste0(base_name, "_html"),
                 edir = TEMP_DIR,
                 template = "plain")
      cat("  -> OK\n")
    }, error = function(e) {
      warning("Erreur export HTML: ", e$message)
    })
  }
  
  # Export PDF (uniquement les questions non-essay)
  if ((isTRUE(produce$pdf) || is.list(produce$pdf)) && length(exam_files) > 0) {
    cat("Export PDF...\n")
    
    tryCatch({
      exams2pdf(exam_files, 
                dir = output_dir, 
                name = paste0(base_name, "_pdf"),
                edir = TEMP_DIR,
                template = "plain-highlight",
                texengine = "xelatex")
      cat("  -> OK\n")
    }, error = function(e) {
      warning("Erreur export PDF: ", e$message)
    })
  }
  
  # Export Moodle XML
  if (isTRUE(produce$moodle) || is.list(produce$moodle)) {
    cat("Export Moodle XML...\n")
    moodle_file <- file.path(output_dir, paste0(base_name, ".xml"))
    
    # Générer via r/exams pour les questions non-essay
    if (length(exam_files) > 0) {
      tryCatch({
        exams2moodle(exam_files, 
                     dir = output_dir, 
                     name = paste0(base_name, "_rexams"),
                     edir = TEMP_DIR,
                     mchoice = list(shuffle = TRUE),
                     schoice = list(shuffle = TRUE))
        cat("  -> r/exams OK\n")
      }, error = function(e) {
        warning("Erreur export Moodle r/exams: ", e$message)
      })
    }
    
    # Générer les questions essay en XML Moodle directement
    if (length(essay_questions) > 0) {
      cat("  Génération des questions essay pour Moodle...\n")
      essay_xml <- generate_moodle_essay_xml(essay_questions)
      essay_file <- file.path(output_dir, paste0(base_name, "_essay.xml"))
      writeLines(essay_xml, essay_file)
      cat("  -> Essay XML OK:", essay_file, "\n")
    }
    
    # Fusionner les deux fichiers XML si les deux existent
    rexams_file <- file.path(output_dir, paste0(base_name, "_rexams.xml"))
    essay_file <- file.path(output_dir, paste0(base_name, "_essay.xml"))
    
    if (file.exists(rexams_file) && file.exists(essay_file)) {
      merge_moodle_xml(rexams_file, essay_file, moodle_file)
      cat("  -> Fusion OK:", moodle_file, "\n")
    } else if (file.exists(rexams_file)) {
      file.copy(rexams_file, moodle_file, overwrite = TRUE)
    } else if (file.exists(essay_file)) {
      file.copy(essay_file, moodle_file, overwrite = TRUE)
    }
  }
  
  # Export Wooclap CSV
  if (isTRUE(produce$wooclap) || is.list(produce$wooclap)) {
    cat("Export Wooclap CSV...\n")
    wooclap_file <- file.path(output_dir, paste0(base_name, "_wooclap.csv"))
    
    tryCatch({
      wooclap_csv <- generate_wooclap_csv(questions)
      writeLines(wooclap_csv, wooclap_file, useBytes = TRUE)
      cat("  -> OK:", wooclap_file, "\n")
    }, error = function(e) {
      warning("Erreur export Wooclap: ", e$message)
    })
  }
  
  # Nettoyer les fichiers temporaires
  cat("Nettoyage...\n")
  # unlink(TEMP_DIR, recursive = TRUE)  # Décommenter pour nettoyer
  
  cat("=== Build terminé ===\n")
  cat("Fichiers générés dans:", normalizePath(output_dir), "\n")
  
  return(invisible(list(
    questions = questions,
    exam_files = exam_files,
    output_dir = output_dir
  )))
}

# -----------------------------------------------------------------------------
# Exécution depuis la ligne de commande
# -----------------------------------------------------------------------------
if (!interactive()) {
  args <- commandArgs(trailingOnly = TRUE)
  
  if (length(args) < 1) {
    cat("Usage: Rscript build_exam.R <fichier.Rmd> [output_dir]\n")
    quit(status = 1)
  }
  
  rmd_file <- args[1]
  output_dir <- if (length(args) >= 2) args[2] else OUTPUT_DIR
  
  build_exam(rmd_file, output_dir)
}
