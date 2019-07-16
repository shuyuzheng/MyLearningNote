## Buffer list

**Buffer** is a copy of the opened file in the memory. We edit the content in _buffer_ and write the changes to _file_ when we are satisfied with the changes.

### Signs in buffer list:

* `%`: indicates the buffers is visible in the current window;
* `#`: indicates the alternate file. `<C-^>` allows you to switch between current and alternate files.

### Operations to buffer list

* `:ls`: list the opened buffers;
* `:bnext` or `:bn`: switch to next buffer in the list;
* `:bprev` or `:bp`: switch to previous buffer in the list;
* `:bfirst`
