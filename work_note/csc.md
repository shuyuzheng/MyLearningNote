# Note for using CSC cluster and servers

## Storage

[web page for CSC storage](https://research.csc.fi/csc-guide-user-specific-directories-at-the-servers-of-csc)  

Storage spaces are limited by `quota`, type `quota` in shell can check the status of your storage usage.  
Other command lines used for checking file size in certain directory:

* `ls -lSrh`: list files in directory in the order of file size (largest on the top)
* `du -sh ./*`: check **d**isk **u**sage of the files.
* `du -sh ./* | sort -h`: check disk usage of files in the order of file size.

## Directories for users

1. `$HOME`:
    * Size: 50 Gb
    * Usage: initialization and configuration files and constantly used small programs and files
    * Cleanness: Until removing account.
    * Backup: Yes

2. `$WRKDIR`:
    * Size: 5 Tb
    * Usage: **Temporary**, large data.
    * Cleanness: 90 days after **not accessed** (except files in `DONOTREMOVE/` directory)
    * Backup: **No**
    * Commands:
        * `show_old_wrdir_files <int>`: show the files that are older than <int> days in `$WRKDIR`

3. `$TMPDIR`:
    * Size: -
    * Usage: storing files only during the time when a program is reading and writing them.
    * Cleanness: 24 after the last action.
    * Backup: **No**

4. `$USERAPPL`: `.sisu_appl` or `.taito_appl`
    * Size: 50 Gb (share with `$HOME` ?)
    * Usage: Install their own application software.
    * Cleanness: Until removing account
    * Backup: Yes
    * Software installation:
        * User must to do the installation without using the root user account.
        * The software must be installed to users own **private disk area** instead of the common application directories like `/p/appl/bin` or `/usr/bin`

5. project storage
    * Size: On request
    * Usage: Common storage for project members. A project can consist of one or more user account.
    * Cleanness: Until closing the _project_
    * Backup: **No**

6. Pouta Object Storage
    * Size: 1 Tb
    * Usage: Storage and sharing
    * Cleanness: Never
    * Backup: -
    * Command: s3cmd tool. More details on [CSC guide object storage](https://research.csc.fi/csc-guide-object-storage)

```bash
module load bioconda/3
poutaos_configure
```

7. HPC Archive
    * Size: 2.5 Tb
    * Usage: Long term storage
    * Cleanness: Never
    * Backup: Two copy maintained
    * Command: i commands for iRODS server. list in a table on [CSC guide archiving data to the archive server](https://research.csc.fi/csc-guide-archiving-data-to-the-archive-servers)

```bash
module load irods
iput <file> #copy file to the iRODS server
iget <file> #retrieve file from the iRODS server
```

8. IDA
    * Size: On request
    * Usage: Long term storage
    * Cleanness: Never
    * Backup: Part