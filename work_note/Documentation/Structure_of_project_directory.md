# Structure of work directory

## Data

### Raw data

* All raw data files.
* A `README.md` file records:
  * Where data come from? (url)
  * Description
  * Date accessed

### Processed data

* Well named tidy data
* Processing script
* A `README.md` file records:
  * processed data mapping

---

## Figures

### Exploratory figure

* Not necessary
* DO **not** need to be "pretty" but need to be **useful**

### Final figure

* Usually a small subset of the original figures
* Clear and pretty.
* paddibly multiple panels.

---

## R code

### Raw/unused scripts

* May be less commented (but it's better to be comment)
* May be multiple versions
* May include analysis that are later discarded

### Final scripts

* Clearly commented
  * Small comments liberally - what, when, why, how
  * Bigger commented blocks for whole sections
* Include processing details
* Only analysis that appear in the final write-up

### R Markdown files

* Generate reproducible reports
* Text and R code are integrated

---

## Text

### README file

* Not necessary if you use R markdown
* Should contain step-by-step instructions foe analysis

### Text of analysis/report

* It should include a title, introduction, methods, results, and conclusions
* It should tell a story
* It should **not** contain every analysis you have done
* Contain reference

