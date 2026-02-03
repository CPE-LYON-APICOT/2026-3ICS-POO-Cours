library(exams)

`%||%` <- function(a, b) if (!is.null(a)) a else b

# ---- Mapping r/exams -> Wooclap (CSV) ----

map_exercise_wooclap <- function(ex) {

  type <- switch(ex$metainfo$type,
    schoice = "MCQ",
    mchoice = "MCQ",
    num     = "GuessNumber",
    essay   = "OpenQuestion",
    string  = "OpenQuestion",
    cloze   = "FillInTheBlanks",
    "Other"
  )

  title <- ex$metainfo$name %||% substr(ex$question, 1, 100)
  title <- gsub("[\r\n]+", " ", title)

  correct <- ""
  if (!is.null(ex$solution)) {
    if (is.logical(ex$solution)) {
      idx <- which(ex$solution)
      if (length(idx) == 1) correct <- idx
    } else if (is.numeric(ex$solution)) {
      correct <- ex$solution
    }
  }

  answers <- ex$answers %||% character(0)
  answers <- c(answers, rep("", max(0, 6 - length(answers))))
  answers <- answers[1:6]

  if (ex$metainfo$type == "cloze") {
    answers <- ex$question
    correct <- ""
  }

  data.frame(
    Type    = type,
    Title   = title,
    Correct = correct,
    Choice1 = answers[1],
    Choice2 = answers[2],
    Choice3 = answers[3],
    Choice4 = answers[4],
    Choice5 = answers[5],
    Choice6 = answers[6],
    stringsAsFactors = FALSE
  )
}

# ---- Public API ----

exams2wooclap_csv <- function(files, file = "wooclap.csv") {

  message("→ Génération export Wooclap (CSV)…")

  exs <- xexams(files)
  rows <- do.call(
    rbind,
    lapply(exs, map_exercise_wooclap)
  )

  write.csv(
    rows,
    file = file,
    row.names = FALSE,
    fileEncoding = "UTF-8"
  )

  message("✔ CSV Wooclap écrit dans ", file)
}
