Vim is one of the most famous text editors under Linux system. Considering I might use some servers based on Linux in the future, I try to install and setting Vim on my SP3. It turns out this task is beyond me now. I decided to pick up a user-friendly editor, VS Code, in Win10. 

The problem I met in the setting:
* Many code for installing plugins (using `Pathogen`) on GitHub on customizing `.vimrc` are written in `Linux` or `Dos`. As using `PowerShell` as terminal, I had to rewrite those commands into new syntax.
* Some extensions or `.vimrc` settings involving python are restricted to certain version of python and it seems that Vim 8.1 itself has a poor support for Python in Win10? The warning messages hit me really hard when I finished the installation all plugins. 
* When I tried to install `Vundle` to make plugin installation easier, I was obstructed by installation of `vundle`. The problem comes from path setting for `git` and `curl`, as well as the tampered  `_vimrc` name and `vimfile` location kept reminding me about the incompatibility of Vim and Win10.

However I agree with that Vim is a good editor for programmers because of the various keyboard operations. I have worked through it's official tutorial. That's amazing to work on files without touching mouses. It' also one of the reasons for me to chose VS Code as its succession (the good support extension for Vim). 

To summarize, Vim is a good editor, but it is not friendly to beginners, especially those who work on Win 10. I think I should pick it up after I have enough knowledge to handle it.
***
* OS: Win10 Family Chinese version. (1803)
* Terminal: Windows PowerShell (x86)
* Vim version: 8.1
# 1. Running code with <F5>
This is a customizing setting for Vim itself:
1. To set vim, we should first find out the ".vimrc" file in the directory where vim is installed. For example, in my case, it settles in "C:\ProgramFiles(x86)\Vim". 
> Setting ".vimrc" file writable and readable will make the following operations easier. (In win10 it can be done by: RightClick file -> attribute -> safety -> <do something here> -> apply)

2. writing the following bunch of codes into ".vimrc" file.
```
""""""""""""
"Quickly Run
""""""""""""
map <F5> :call CompileRunGcc()<CR>
func! CompileRunGcc()
	exe "w"
	if &filetype == 'c'
		exec "!g++ % -o %<"
		exec "!time ./%<"
	elseif &filetype == 'ccp'
		exec "!g++ % -o %<"
		exec "!time ./%<"
	elseif &filetype == 'java'
		exec "!javac %"
		exec "!time java %<"
	elseif &filetype == 'sh'
		:!time bash %
	elseif &filetype == 'python'
		exec "!time python3.7 %"
	elseif &filetype == 'html'
		exec "!chrome % &"
	elseif &filetype == 'go'
"		exec "!go build %<"
		exec "!time go run %"
	elseif  &filetype == 'mkd'
		exec "!~/.vim/markdown.pl % > %.html &"
		exec "!chrome %.html &"	
	endif

endfunc
```
> Some extra work might be needed here. For example: changing *chrome* into *firefox* if you prefer the later one.

# 2. Install a plugin manager for vim
I randomly chose [pathogen.vim](https://github.com/tpope/vim-pathogen), because the tutorial of `syntastic` is written for pathogen. There are many other choices, such as [NeoBundle](https://github.com/Shougo/neobundle.vim), [Vim-Addon-Manager](https://github.com/MarcWeber/vim-addon-manager), [Vim-Plug](https://github.com/junegunn/vim-plug/), or [Vundle](https://github.com/VundleVim/Vundle.vim). 

There are several problems when I was trying to install `pathogen.vim` using `PowerShell` in Win10.
1. The problem caused the special syntax of `PowerShell`

  The code in tutorial is for Linux or former version of Windows(for windows all `~/.vim` should be changed to `~\vimfiles`):
```
mkdir -p ~/.vim/autoload ~/.vim/bundle && \
curl -LSso ~/.vim/autoload/pathogen.vim https://tpo.pe/pathogen.vim

cd ~/.vim/bundle && \
git clone https://github.com/tpope/vim-sensible.git
```
  Following is code for `PowerShell`:
```
New-Item -Path "~\vimfiles\autoload","~\vimfiles\bundle" -ItemType "directory"
Invoke-WebRequest -Uri "http://tpo.pe/pathogen.vim" -OutFile "~\vimfiles\autoload\pathogen.vim"

cd ~\vimfiles\bundle
git clone https://github.com/tpope/vim-sensible.git
```
2. The basic steps are:
  * Creating two directories named `autoload` and `bundle` in `vimfiles`.
  * Writing the contents from "http://tpo.pe/pathogen.vim" in a file with path "~\vimfiles\autoload\pathogen.vim"
  * Clone the repository "https://github.com/tpope/vim-sensible.git" from GitHub to "~\vimfiles\bundle"

3. Setting vim
 
Pasting the following lines into the `vim ~/.vimrc` file
```
execute pathogen#infect()
syntax on
filetype plugin indent on
```
> **What is on the runtime path?**
> * All of the _plugins_, _syntax highlighting_, _language-specific indentation_ that extend the default behavior of _vim_ are on the runtime path(rtp for short).
> * Typing `:echo &rtp` in vim could show the list of runtime paths. If you want to see all of them, typing `:echo &rtp` is a better choice.
> * See `:h rtp` for more details.

# 3. Intelligent code completion

Recommended add-ons:
  * [SnipMate](https://github.com/garbas/vim-snipmate)
  * [xptemplate](https://github.com/drmingdrmer/xptemplate.git)

I don't know the difference between them. I just picked up 'SnipMate' arbitrarily. Maybe I'll transfer to another one when I get bored with it, but that should be in another note.

# 4. Syntax checker: [Syntastic](https://github.com/vim-syntastic/syntastic)
> **What can `Syntastic` do?**
> ![Syntastic](https://github.com/vim-syntastic/syntastic/raw/master/_assets/screenshot_1.png)
> 1. Errors are loaded into the location list for the corresponding window.
> 2. When the cursor is on a line containing an error, the error message is echoed in the command window.
> 3. Signs are placed beside lines with errors - note that warnings are displayed in a different color.
> 4. There is a configurable statusline flag you can include in your statusline config.
> 5. Hover the mouse over a line containing an error and the error message is displayed as a balloon.
> 6. (not shown) Highlighting errors with syntax highlighting. Erroneous parts of lines can be highlighted.
Installation:(pathogen.vim)
1. Clone `Syntastic` into `/vimfiles/bundle`
```
cd ~/vimfiles/bundle
git clone --depth=1 https://github.com/vim-syntastic/syntastic.git
```
2. Recommended settings(`vim \.vimrc`):
```
set statusline+=%#warningmsg#
set statusline+=%{SyntasticStatuslineFlag()}
set statusline+=%*

let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq = 0
```

