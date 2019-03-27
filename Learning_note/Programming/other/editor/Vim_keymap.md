## Page move up and down

* control b - move **b**ack one full screen
* control f - move **f**orward one full screen
* control d - move **d**own 1/2 screen
* control u - move **u**p 1/2 screen

## Substitute strings with `:s`

* `:s/old/new/`: Basic form, to substitute **the 1st** _old_ in **current line**.
* `g`: Substitute **all** _old_ in **the line**.
* `:n,$s`: From **_n_th line**j to the **end line**.
* `:%s`: Substitute the **1st** _old_ in **every line**

* Alternative separate symbols: `#` or `+`
* Substitution in whole file:
    * `:%s/old/new/g` 
    * `:g/old/new/g` 
    * `:1,$s/old/new/g`
    * v + G + $: select whole document. $\rightarrow$ `:%s/old/new/g`

## Split Layouts

1. Open multiple files
* `:sv <filename>` : Open files with vertical splited view.
* `:vs <filename>` : Open files with horizontal splited view.

