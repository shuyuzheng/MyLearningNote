# Successfully install and setting Vim on Surface Pro4

2019-03-03  
Shuyu Zheng  

I had a failed experience of installing Vim editor on Surface Pro3. With very limited knowledge about coding, command line, difference between OS (Win10 and Linus), setting vim properly on Win10 laptop from online tutorials is impossible for me.  
Today I find a good [blog](https://blog.csdn.net/zxy9602/article/details/79439257) written by [pdsu_zhao](https://me.csdn.net/zxy9602) for installing and setting Vim under Win10 system. By following this blog, I have successfully setted a Vim editor as well as NERDTree plugin on my computer. I'd like to write down some changes I made in my setting.

## Vundle plugin

When setting Vunble command in `_vimrc` file, path for calling `vundle#begin()` need to be specified like this: `call vundle#begin(path\to\Vundle.vim\)`

## Setting Python coding environment

Following a guidline on [codingpy](http://codingpy.com/article/vim-and-python-match-in-heaven/)

Debug setting:

1. "quickly run with F5" code in `_vimrc` file. The code can be found in previous article `Faild Vim Setting.md`
2. Mapping `\ + B` key shot as add breakpoint in python code.
