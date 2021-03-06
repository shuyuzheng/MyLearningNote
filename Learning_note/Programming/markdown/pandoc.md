# Pandoc

[Official Document](https://pandoc.org/MANUAL.html)

## Input and Output

`pandoc -o <output> <input>`

### 1. Default

Default input format is _plain text file_.

Default output format is standalone document (a valid HTML file include <head> and <body>). It is generated by tag `-s` or `--standalone`.

### 2. Specifying formats

Input format can be specified by tag
* `-f` or `--from`: one type of format.
* `--list-input-formats`: a list of supported formats. One per line.
* `--list-extensions`: a list of extensions. One per line. Preceded by a `+` or `-` indicating whether it is enabled by default in `format`.

Output format can be specified by tag 
* `-t` or `--to`: one type of format.
* `--list-output-formats`: a list of supported formats. One per line.
* `--list-extensions`: a list of extensions. One per line. Preceded by a `+` or `-` indicating whether it is enabled by default in `format`.

### 3. No specified formats

If I/O formats are not explicit, pandoc will guess the formats from **file extension**.

If file extension is not explicit, pandoc will use **HTML** as default output and **Markdown** as default input.

### 4. Formats

Commonly used formats: 
* Markdown: `markdown` (Pandoc's Markdown); `gfm` or `markdown_github` (GitHub-Flavored Markdown); `markdown_mmd` (MultiMarkdown); `markdown_phpextra` (PHP Markdown Extra); `markdown_strict` (original unextended Markdown)
* Word docx: `docx`
* HTML: `html`
* LaTex: `latex`
* Jupyter notebook: `ipynb`
* slider(for output): `beamer` (LaTeX beamer slide show); `pptx` (PowerPoint slide show); `slideous` (Slideous HTML and JavaScript slide show); `slidy` (Slidy HTML and JavaScript slide show); `revealjs` (reveal.js HTML5 and JavaScript slide show); `dzslides` (DZZlides HTML5 and JavaScript slide show)

There are a lot of other formats can be fund on [Pandoc's Official Document](https://pandoc.org/MANUAL.html)

## General options

### 1. Basic setting

* `--data-dir=<directory>`: specify the user data directory to search for pandoc data files. Default directory:
  * \*NIX and macOS: `$HOME/.local/share` or `XDG_DATA_HOME`. Alternative directory is `$HOME/.pandoc`
  * Windows: `C:\Users\<Username>\AppData\Roaming\pandoc`
* `--bash-completion`: generate a bash completion script. You can add it to `.bashrc`. (`eval "$(pandoc --bash-completion)"`)

### 2. Options during running

1. Running messages:
* `--verbose`: give verbose debugging output.
* `--quiet`: Suppress warning messages.
* `--fail-if-warnings`: Exit with error status if warning occurs.
* `--log=<file>`: write the log messages to a file (JSON).

2. Output highlight setting:
* `--list-highlight-languages`: List supported languages for syntax highlighting. One per line.
* `--list-highlight-styles`: List supported languages for syntax highlighting. One per line.

3. About pandoc:
* `-v` or `--version`: Print version.
* `-h` or `--help`: Show usage message.


