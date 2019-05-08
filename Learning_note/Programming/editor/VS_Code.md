After struggling with Vim for almost one day on windows10 system, I gave up and transferred to VScode. The settings and extences for Vim is too difficult for me. Following is my setting in VScode for r and python.

# 1. Environment
* OS version: Windows 10 Family (1803)
* VSCode version: 1.27.2 (x64)
* R version: 3.5.1 (x64)
* Python version: 3.7 (x64)

# 2. Extensions for "VS Code"
1. Installation: click `Extensions` icon in the left bar and search for extensings by name.
2. **Python** _2018.8.0_: Supporting for Python, here is [official tutaorial](https://code.visualstudio.com/docs/languages/python).
3. **R Extension Pack**
    * **R** _0.6.1_: support for R language(run, syntax, snippet) Setting `r.rterm.windows` to `R.exe` Path.
    * **R.lsp client** _0.0.7_: R language support for VS Code, powered by the [R language server](https://github.com/REditorSupport/languageserver).Also, please set the `r.rpath.lsp` to use other `R.exe` for `r.rterm.xxx`(What does this sentence mean???)

> When I open the `.Rmd` files created by `Rmarkdown` package in R, it can't show the correct format and have no interaction backups in code blocks. There are some people asked the similar question to author on the GitHub. It seems this Extension cannot complicate the R 3.5. Waiting for new versions!
4. **Vim** _0.16.Vim emulation for VS Code
5. **Markdown Preview Enhanced** _0.3.5_: preview markdown
6. **Jupyter**_1.1.4_: Jupyter note cell run code.
7. **Table Formatter**_1.2.1_: Formatting tables in markdown file.

# 5. **keybindings.json**: ctrl + k ctrl + s
* "alt + -": type " <- ". R studio-like shortcut

    ```
    [
    { "key": "alt+-",           "command": "type",
    "args": {"text": " <- "},  "when": "editorTextFocus"
    },

    { "key": "ctrl+enter",      "command": "jupyter.execCurrentCell",
                                      "when": "editorTextFocus"
    }
    ]
    ```

# 4. Other terminal seting:
1. **R**:
    Install packages: `languageserver`, `knit`
2. **Python**:
    Install packages: `pip`
3. [Pandoc](https://pandoc.org/)
4. For `Markdown Preview Enhanced`, `pdf2svg` and LaTeX distribution are required. [Official tutorial](https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/extra?id=install-svg2pdf)
