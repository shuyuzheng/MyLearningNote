---
output:
  pdf_document: default
  html_document: default
---
# FIMM Atlas Cluster

Shuyu Zheng

## Start

[official guideline](https://www.fimm.fi/en/services/technology-centre/it/it-instructions)

1. Get rights for accessing services: 
  * General account: Go to https://userportal.giu.fi/
  * Access to special service, like `sisu_impute.q`: Contact Olle Hansson (olle.hansson@helsinki.fi)
  * Access to different data folders: Contact Jarmo Harju
2. Connect to Atlas:
  * Server: `atlas.fimm.fi`
  * Command line: `ssh <username>@atlas.fimm.fi`
  * Windows: Using ssh clients, like `Putty`.
3. Transfer files
  * local to remote: `scp /path/to/local_file username@atlas.fimm.fi:/path/to/remote_file`
  * remote to local: `scp username@atlas.fimm.fi:/path/to/remote_file /path/to/local_file`
  * Windows: Using SCP servers, like `WinSCP`

## Environment

### Nodes
1. Login node
  * Do:
    * File operations (copy, edit, create, move, etc).
    * Submit jobs to cluster nodes.
    * Monitor the status of jobs on cluster nodes.
    * Login interactive node: `qlogin -q interactive.q`
  * Don't:
    * Run intensive tasks.
2. Interactive node
  * Do:
    * Run interactive tasks, like running R codes in R console.
  * Don't:
    * Submit jobs to cluster nodes.
    * Run time-consuming tasks, because you have to connect with server during the processing.
3. Cluster node
  * Do:
    * Run user submitted jobs.
    * Automatic _queue_ system for allocating jobs.

## Queues
  * express.q: mem < 2G, timeout limmit 90 min;
  * all.q: mem < 2G;
  * medmem.q: mem 2-5G;
  * highmem.q: mem 5-10G;
  * hugemem.q: mem 10-20G.

## Job management commands

### 1. Submit queue (Run in `login node`)

1. `qsub <option> <command>`

Options:

* Basic setting:
  * `-A <username>`: add the job to your own queue;
  * `-N <job_name>`: informative name for later job status lookup;
  * `-q <queue_type>`: select the type of queue;
* Job specific setting:
  * `-l h_vmem=<n>G`: specify hard limit on memory;
  * `-l h_rt=hh:mm:ss`: specify hard limit on runtime;
  * `-b <y/n>`: `y`, run binary code;`n`, run non-binary codes (like shell script);
  * `-shell n`: do not create a new bash shell but run the command immediately;
  * `-c n`: no checkpoint performed;
  * `-V`: export all active environment variables to the job;
  * `-w e`: validate the submission. If error stop immediately;
* Output setting:
  * `-e /path/to/error_log_file/`: set the file for error log;
  * `-o /path/to/basic_log_file/`: set the file for output log.

2. `grun.py`: a queue submit wrapper

Options:

* `-h` or `--help`: show help message;
* Basic setting
  * `-c <command>` or `--command <command>`: set the commands that will run on cluster nodes. Wrap your command with `"`;
  * `-n <name>` or `--name <name>`: set the name of the jobs;
  * `-q <queue_type>` or `--queue <queue_type>`: select the type of queues;
  * `-l` or `--list`: 
  * `-N <nodes>` or `--nodes <nodes>`: specify nodes;
* Notation setting:
  * `-M`:
    * `<your.email@provider.fi>`: set the email for receive the notations;
    * `n`: don't send any mails. 
  * `-m <mail>` or `--mail <mail>`:
    * `a`: send mail if jobs aborts/fails;
    * `b`: send mail when jobs begin;
    * `e`: send mail when jobs end;
    * `n`: don's send any mails.
* Other setting:
  * `-L <logdir>` or `--log-dir <logdir>`
  * `-s <sync>` or `--sync <sync>`
  * `-S <slots>` or `--slots <slots>`
  * `-R [<resources> [<resources> ...]]` or `--resources [<resources> [<resourses> ...]]`
  * `--hold-jid [<hold_jid> [<hold_jid> ...]]`

You can add default set for sending mails in file `/homes/<username>/.grun.ini`

### 2. Monitor the jobs and node

1. Query job status with `qstat`

Options:

* `-u <username>`: check all your current running jobs
* `-j <job_id>`: check a specific job.
* `-g c`: check queues usage

2. Delete submitted jobs with `qdel`

Options:

* `-j <job_id>`: kill job by its ID;
* `<job_name>`: kill job by its name;

3. Monitor global environment with `qhost`

Option:

* ` `: Without option it will show the nodes information of the cluster
* `-j`: It will show all nodes and **all** jobs currently running on the cluster
