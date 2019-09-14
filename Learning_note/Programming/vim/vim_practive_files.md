## Buffer list

**Buffer** is a copy of the opened file in the memory. We edit the content in _buffer_ and write the changes to _file_ when we are satisfied with the changes.

### Signs in buffer list:

* `%`: indicates the buffers is visible in the current window;
* `#`: indicates the alternate file. `<C-^>` allows you to switch between current and alternate files.

### Operations to buffer list

* `:ls`: list the opened buffers;
* `:bnext` or `:bn`: switch to next buffer in the list;
* `:bprev` or `:bp`: switch to previous buffer in the list;
* `:bfirst`: jump to the first buffer;
* `:blast`: jump to the last buffer

### Open the files

* `:find path/to/file.txt`: find and open a file in current buffer
* `:vs path/to/file.txt`: open a file in a vertical split window
* `:sp path/to/file.txt`: open a file in a horizontal split window
* `:tabnew path/to/file.txt`: open a file in a new tab

### Delete buffers

* `:bdelete N1 N2 N3`: delete N1, N2, N3 buffers
* `:N,M bdelete`: delete buffer N to M
* `:bd`: shortcut for `bdelete`

## Argument list

The argument list is a collection of buffers. You can run `Ex` command on the whole list by using `:argdo`

* `:args {arglist}`: `{arglist}` can include filename, wildcards, and output from shell command.
