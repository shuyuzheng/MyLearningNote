---
output:
  pdf_document: default
  html_document: default
---
# Tips for using server

## FIMM Atlas

### Setting

### 1. `~/.forward` file defines default e-mail address

Create a file named `.forward` in `$HOME` directory. It contains one line text about your e-mail address, like `your.email@helsinki.fi`.

### 2. `~/.bashrc` file set evironment

```bash
# Automatically close shell after 30 minutes without input
TMOUT=1800

# Setting R-3.5.1 as default
PATH=/apps/statistics2/R-3.5.1/bin:$PATH ; export PATH

# Customize promt to show username and current directory
PS1="[\u \W]\$ "
```

### 3. `~/.bash_profile` file tell shell to use `~/.bashrc`

```bash
if [ -f ~/.bashrc ]; then
. ~/.bashrc
fi
```

**Note**:

* The shell will not use `~/.bashrc` unless you have this command lines in `~/.bash_profile` file.

* To test whether your `~/.bash_profile` works well without restart shell, you can use `source ~/.bash_profile` command.