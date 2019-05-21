# Vim tricks

## Basic setup

```
set nocompatible
syntax enable
filetype plugin on
```

## Fuzzy File Search

```
" Provide tab-completion for all file-related tasks
set path+=**
" Display all matching files when we tab complate
set wildmenu
```

`:b` lets you autocomplete any open buffer

## Tag jumping

```
" Create the 'tags' file (may need to install ctags first)
command! MakeTags !ctags -R .
```

* `^]`: jump to tag under cursor
* `g^]`: ambiguous tags
* `^t`: jump back up the tags stack

## Autocomplete

* `^x^n` for Just this file
* `^x^f` for filenames
* `^x^j` for tags only
* `^n` for anything specified by the 'complete' option
Then
* `^n` to go forth in suggest list
* `^p` to go back in suggest list

## File Browsing 

" Tweaks for browsing
let g:netrw_banner=0     "disable banner
let g:netrw_browse_split=4 "open in prior window
let g:netrw_altv=1         "open splits to the right
let g:netrw_liststyle=3    "tree view
let g:netrw_list_hide=netrw_gitignore#Hide()
let g:netrw_list_hide.=',\(^\|\s\s\)\zs\.\S\+'

`:edit` a folder to open a file browser
`<CR>h/v/t` to open in a h-split/v-split/tab

## snippets

```
nnoremap ,html :-lread $HOME/.vim/.skeleton.html<CR>3jwf>a
```

## Build Integration 

Ruby code check and format

http://philipbradley.net/rspec-into-vim-with-quickfix

```
" Confifure the 'make' command to tun RSpec
set makeprg=bundle\ exec\ rspec\ -f\ QuickfixFormatter
```

* Run `:make` to run RSpec
* `:cl` to list error
* `:cc#` to jump to error by number
* `:cn` and `:cp` to navigate forward and back

## Clipboard

1. Use specific clipboards

`"ad`: delete into register `a`.
`"ap`: paste from register `a`.

2. Use system clipboard

`"+d`: delete into system clipboard.


