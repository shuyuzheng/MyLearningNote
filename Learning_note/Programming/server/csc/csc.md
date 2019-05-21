# CSC server using tips

## General information

Informations about nodes of taito could be found at [official docs](https://research.csc.fi/taito-supercluster#1.1.2)

## Commands

### 1. Check node status:  

* `sinfo -Nel`: In a compute node oriented format. 
* `sinfo -el`: In a partition/queue oriented format.
* `df -h`: Check disk systems informatio. 
* `cat /proc/cpuinfo`: check the available processors on the current node.
* `cat /proc/meminfo`: check the current memory usage on the node.

### 2. Check softwares installed:

`rpm -qa`

### 3. Module system:

Syntax: `module <command> <module-name>`

* list current loading module: `module list`
* load module: `module load <module-name>`
* unload module: `module unload <module-name>`
* check available modules: `module avail`
* check all installed software packages: `module spider`
 
### 4. Transport data with Mac

1. from local to remote: `scp <file to copy> <user@server.example.fi:/path/to/location>`
2. from remote to local: `scp <user@server.example.fi:/path/location/file_name> <file to local>`

### 5. 
