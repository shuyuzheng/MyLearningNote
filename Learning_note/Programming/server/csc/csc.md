# CSC server using tips

## Transport data with Mac

### from local to remote

`scp <file to copy> <user@server.example.fi:/path/to/location>`

### from remote to local

`scp <user@server.example.fi:/path/location/file_name> <file to local>`

## Using Taito cluster

Informations about nodes of taito could be found at [official docs](https://research.csc.fi/taito-supercluster#1.1.2)

Node types:

1. Sandy Bridge login node:
  * Nodes: 4
  * Cores: 16
  * Memory: 64 GB
2. Haswell compute node:
  * Nodes: 397
  * Cores: 24
  * Memory: 128 GB
3. Haswell big memory node:
  * Nodes: 10
  * Cores: 24
  * Memory: 256 GB
4. Sandy Bridge huge memory node:
  * Nodes: 2
  * Cores: 32
  * Memory: 1.5 TB
5. Haswell huge memory node:
  * Nodes: 4
  * Cores: 40
  * Memory: 1.5 TB

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
 
