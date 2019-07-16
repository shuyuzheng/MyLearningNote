## Normal mode

`Normal mode` is the natural resting state for programmer to think, read, navigate and composing their codes.

1. Get used to `Normal mode`
  * Hit `<Esc>` after each sentence.
  * Use `<Esc>o` to replace `<CR>` at the end of lines.
  
2. Best choice for delete a word: `daw`

3. Do calculation with vim:
  * `<C-a>`: add the number under or immediately after cursor with 1.
  * `<C-x>`: subtract the number under or immediately after cursor with 1.
  * `<n><C-a/x>`: add or subtract the number with `<n>`.
  * For numbers padded with zeros, like 007, vim treat them as octal number. If you'd like to use decimal numbers, add `set nrformats=` in `vimrc`.
  
4. Using repetition instead of count, for example, `<dw>...` is better than `<4dw>` or `<d4w>`.

5. Using count when it matters, like `<c5w>`.

### Combine and Conquer

Basic idea: Operation + Motion = Action

The interval status between `operation` and `motion` is called `Operator-Pending Mode`

#### Operation

* `c`: change
* `d`: delete
* `y`: Yank into register
* `~`: Swap one case (only if `tildeop` is set)
* `g~`: Swap case
* `gu`: Make lowercase
* `gu`: Make uppercase
* `>`: Shift right
* `<`: Shift left
* `!`: Filter through an external program
* `=`: Filter through 'equalprg' or C-indenting if empty
* `gq`: Text formatting
* `g?`: ROT13 encoding
* `zf`: Define a fold
* `g@`: call function set with the 'operatorfunc' option

#### Motion

* When an operator command is invoked in duplicate, it acts upon the *current line*
* `aw`: a word
* `ap`: a paragraph
* `t<char>`: go to the position before the next character `<char>`

#### Custom Operation

1. Custom operation work with existing motions: 'commentary.vim' plugin
2. Custom motions work with existing operators: 'textobj-entire' plugin

## Insert Mode

### Correct typos under 'Insert Mode'

* `C-h`: Delete back one character
* `C-w`: Delete back one word
* `C-u`: Delete back to start of line

### Get back to 'Normal Mode'

* `<Esc>`: Switch to Normal Mode
* `C-[`: Switch to Normal Mode
* `C-o`: Switch to Insert Normal Mode

### Insert Normal Mode

The *Insert Normal Mode* is a mode which you can enter to from `Insert Mode`, execute a command under `Normal Mode` and then immediately jump back to `Insert Mode`

Usage of `Insert Normal Mode`: `<C-o>zz` can jump out `Insert Mode`, scroll screen down and go back to `Insert Mode` again.

### Using <C-r>{register} to paste elements under `Insert Mode`

1. `<C-r>{register}`: Insert the text from the register as if _it were being typed one character at a time_. It means that if the `textwidth` or `autoindent` options are enabled, there might be _line breaks_ or extra _indentation_.
2. `<C-r><C-p>{register}`: It inserts text literally and fixed any unintended indentation.

### Do in-place calculation with 'put' command

*Expression register* is a register for saving expressions and it is addressed by `=`.

Hitting `<C-r>=` under `Insert Mode` will trigger a prompt st the bottom of screen. We can do calculation here and return the result into text by hitting `<CR>`.

### Insert unusual characters

1. `<C-v>`{code}: return the character with the address `code`. To find out the `code` of certain character, you can put cursor on that character and hit `ga`(under `Normal Mode`.

2. `<C-k>{char1}{char2}`: insert character with digraph. For example, `<C-k>13` will insert ⅓. Some of the digraphs:

* `1S`: superscript one; ¹
* `1s`: subscript one; ₁
* `13`: vulgar fraction one third; ⅓
* `+-`: plus-menus sign; ±
* `a-`: small letter a with macron; ā
* `a>`: small letter a with circumflex; â
* `a*`: alpha; α
* `b*`: beta; β
* `(-`: element of; ∈

### Replace Mode

Under `Replace Mode` the text will be changed but the length of sentence will not change.

* Hitting `R` or `r` will enter `Replace Mode`.

*Virtual Replace Mode*: It is triggered by `gr`. Under this mode we can overwrite characters of screen real estate rather than dealing with the actual characters that would eventually be saved in a file. For example, it treats the `tab` character as though it consisted of spaces (if the `tabstop` option is setted as more than 1).

## Visual Mode

**Visual Mode**: define a _selection_ of test and then _operate_ upon it. All of the operators in `Normal Mode` are available under this mode.

Variants of visual mode: (Following keys are available to _trigger_ corresponding modes under `Normal Mode` or switch among these modes under `Visual Mode`
* characters: `v`
* lines: `V`
* rectangular blocks: `<C-v>`

* reset the last visual selection: `gv`
* Go to other end of highlighted text: `o`. It is useful when you want to extend the selections from other side.

**Select Mode**: a mode fit to the traditional selection mode as other editors using. (selection and then directly type _printable characters_ to make change instead of using operators). Type `<C-g>` under `visual mode` can enter `select mode`. It is useless normally as we can always hit `c` to make change. The only senary might require this mode is: when using a plugin that emulates TextMate's snippet functionality, `select mode` highlights the active placeholder.

**Repeat visual command**:
* dot command `.` repeats the change on the _same range of text_ that was selected.
* It works well in `line-width visual model` and `Normal operator`, but may cause problem in `visual operator` under `character-width visual mode`. So `Normal mode` is prioritizing to `visual mode` in purpose of repetition.

## Ex Mode (Command Line Mode)

**Command Line Mode**: execute a _command_ upon _multiple_ lines specified by `[range]` or `[line]`.

### Basic syntax

|                    Command                     |   Shortcut  |                                      Function                                   |
| :--------------------------------------------: | :---------: | :-----------------------------------------------------------------------------: |
| `:[range]print`                                |     `p`     | Print specified lines in console                                                |
| `:[range]delete [x]`                           |     `d`     | Delete specified lines [into register x]                                        |
| `:[range]yank [x]`                             |             | Yank specified lines [into register x]                                          |
| `:[line]put [x]`                               |             | Put the text from register x after specified line                               |
| `:[range]copy {address}`                       | `co` or `t` | Copy the specified lines to below the line specified by {address}               |
| `:[range]move {address}`                       |     `m`     | Move the specified lines to below the line specified by {address}               |
| `:[range]join`                                 |             | Join the specified lines                                                        |
| `:[range]normal {commands}`                    |    `norm`   | Execute Normal mode {commands} on each specified line                           |
| `:[range]substitute/{pattern}/{string}/[flag]` |     `s`     | Replace occurrences of {pattern} with {string} on each specified line           |
| `:[range]global/{patter}/[cmd]`                |     `g`     | Execute the Ex command [cmd] on all specified lines where the {pattern} matched |

### Methods to specify [range]

* Line Numbers: `:1`, `:1,5`
* Special symbols:
    * `.`: current line under cursor;
    * `$`: last line of the file;
    * `0`: a virtual line before the first line of text. It is useful in {address} of `move` or `copy` command, when you want to add content to the beginning of the text;
    * `%`: all lines in the file;
    * `'m`: line containing mark `m`;
    * `'<`: start of last visual selection;
    * `'>`: end of last visual selection;
* Pattern: `/{pattern}/,/{pattern}/`
* Offset: `.,.+3`

You can mix and match line numbers, marks, symbols and offset to specify the range. For example `:.,.+3`, `/<html>/+1,/<\/html>-1`

_Tips_: `:t.` does the same thing as `yyp` (duplicate current line), but **it doesn't use register**.

Shortcut for generating `[range]`:
* Visual selection: when enter `Ex mode` from `Visual Mode`, vim will automatically add `'<,'>` after `:`.
* `!{motion}`: generate the `[range]` according to `{motion}` in `Normal Mode`. For example, `!G` generate `:.,$` in prompt.

### Repeat the last Ex command

`@:` repeat the command.  
`<C-o>` could reverse _some_ of `@:` and `u` can undo some of others.

### Auto-complete of Ex command

* `<C-d>` will trigger the completion list.  
* `<Tab>` and `<S-Tab>` allow you to move forward or backward within this list.
* When you type a _filepath_ in Ex command, `<Tab>` is helpful to complete the path.

To enable `<Tab>` trigger a completion list, you should set:
* `set wildmode=longest, list` for bash shell flavor.
* `set wildmenu; set wildmode=full` for zsh flavor. It will show a navigable list of suggestion. You can:
    * scroll forward with: `<Tab>`, `<C-n>`, or `<Right>`
    * scroll backward with: `<S-Tab>`, `<C-p>`, or `<Left>`

### Insert current word to prompt

* `<C-r><C-w>` copy and paste word under cursor into prompt.
* `<C-r><C-a>` copy, uppercase and paste word under cursor into prompt.

### Command history

* `q/`: history of searches;
* `q:`: history of commands;
* `<C-f>`: switch from `Command Line Mode` to command-line window.

### Run commands in shell

* `:! {command}`: execute shell command in prompt;
* `:shell` or `<C-z>`: start an interactive shell session;
* `exit` or `fg`: exit shell session;
* `:read !{cmd}`: direct standard output of `{cmd}` into buffer. For example, `:read !pwd`;
* `:write !{cmd}`: use the contents of the buffer as standard input of the `{cmd}`;
* `[range]write!{cmd}`: use the lines specified by `[range]` as standard input;
* `[range]!{filter}`: filter the specified `[range]` through external program `{filter}`. For example, in a `csv` file calling `:2,$!sort -t',' -k2` will sort the file content, except header, by the 2nd field.

You can write down a series of `vim command` into a batch file with `.vim` extension and then use `:source {vim_batch_file}` in a file to execute them. `:argdo source {vim_batch_file}` could use the script to multiple files.
