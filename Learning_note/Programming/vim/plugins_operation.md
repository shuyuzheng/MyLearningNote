# Netrw: reading, writing and browsing files

## Protocols for accessing remote file

1. "scp"

Edit file: `vim scp://hostname/path/to/file`  
Edit directory: `vim scp://hostn__Md__ame/path/to/dir/`

2. "ftp"

Edit file: `vim ftp://hostname/path/to/file`
Edit directory: `vim ftp://hostname/path/to/dir/`

3. Other protocols

dav, fetch, http (elinks, linkd, curl, wget, fetch), rcp, rsync , sftp.

## Operations for Reading and Writing
* `:e ftp://[user@]machine/path`: reading 
* `:w ftp://[user@]machine/path`: writing
* `:so ftp://[user@]machine/path`: source
* `:e ftp://[user]@hostname/path/`: list directory

## Browsing files

1. Display:
    * __a__ __A__djust display styles: normal display, hiding, showing.
    * __i__ Cycle between thin, long, wide, and tree listings.
    * __C__ Setting the editing window.
    * __gh__ Quick __h__ide/unhide of dot-files.
    * __<c-h>__ edit file __h__iding list.
    * __<c-l>__ refresh the directory __l__isting.
    * __qf__ Display in__f__ormation on file.
    * __r__ reverse sorting orders.
    * __s__ __S__orting style: by name, time, or file size.
    * __S__ Specify __S__uffix priority for name-sorting.

2. Navigation:
    * __gb__ __G__o to __p__revious bookmarked directory.
    * __u__ Change to recently-visited directory.
    * __U__ Change to subsequently-visited directory.
    * __o__ Enter/ __O__pen the file/directory under the cursor in a new browser window. _Horizontal split_.
    * __v__ Enter the file/directory under the cursor in a new browser window. _Vertical split_

3. Directory or file operation.
    * __c__ Make browsing directory the __c__urrent directory.
    * __d__ Make a __D__irectory.
    * __D__ __D__elete the file(s)/directory(ies).
    * __O__ __O__btain a file specified by cursor.
    * __p__ __P__review the file
    * __P__ Browse in the __p__reviously used window.
    * __R__ __R__ename the designed file(s)/directory(ies).
    * __X__ View file with an associated program.
    * __%__ Open a new file in netrw's current directory.

4. Marked files
    * __mb__ __B__ook __m__ark current directory.
    * __mc__ __C__opy __m__arked files to marked-file target directory.
    * __md__ Apply __d__iff to __m__arked files (up to 3).
    * __me__ Place __m__arked files on arg list and __edit__ them.
    * __mf__ __m__ark a __f__ile.
    * __mh__ toggle __m__arked file suffices' presence on __h__iding list.
    * __mm__ __m__ove __m__arked files to marked-file target directory.
    * __mp__ __P__rint __m__arked files.
    * __mr__ __M__ark files satisfying a shell-style __r__egexp.
    * __mt__ Current browsing directory become __m__arked __t__arget.
    * __mT__ Apply c__t__ags to marked files.
    * __mu__ __U__nmark all __m__arked files.
    * __mx__ Apply( __E__xecute) arbitrary shell command to __m__arked files.
    * __mz__ Compress/decompress( __z__ip) marked files.
    * __qb__ List __b__ookmarked directories and history.
