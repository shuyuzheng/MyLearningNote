# Parallel R

## Computer cluster

A **computer cluster** is a set of loosely or tightly connected computers that work together so that, in many respects, they can be viewed as **a single system**.

Computer clusters have each node set to perform the **same** task.

The components of a cluster are usually connected to each other through fast **local area networks**.
## Connections used in cluster

### Socket
Popular on multicore computers, particular Windows computers
### MPI
Popular on Linux clusters
### PVM

### NetWorkSpaces

## Snow (Simple network of workstations)

### summary

* Overview: Good for use on traditional clusters, especially if MPI is available. It supports MPI, PVM, nws, and sockets for communication, and is quite portable, running on Linux, Mac OS X, and Windows.
* Solves: Single-threaded, memory-bound.
* Pros: Mature, popular package; leverages MPI’s speed without its complexity.
* Cons: Can be difficult to configure.

### How it works

* Most functions are variation of the standard `lapply()` function.
* **Master/worker architecture**: the master sends tasks to the workers, and the workers execute the tasks and return the results to the master.
* Communicate between the _master_ and _workers_ can use **different transport mechanisms**
* Parallel random number generation: `rsprng` and `rlecuyer` packages.
* It does **not** provide mechanisms for dealing with large data. User need to take care of the memory using.

### setting up

1. Install R package `snow`
2. Install `Rmpi` package if you want to use MPI.

### Working with it

1. Create a `cluster object`. This object is used to interact with the cluster workers.
    * Function: `makeCluster(<cluster specification>, type=)`.
    * Argument `cluster specification`: The interpretation of it depends on the `type`. For socket clusters, it could be a `int` indicating the number of workers or a `character vector` indicating the worker machines.
    * Argument `type` can be: "SOCK", "MPI", "PVM" or "NWS"
    * You can also use the functions `makeSOCKcluster()`,`makeMPIcluster()`,`makePVMcluster()`,`makeNWScluster()`.

2. The socket transport launches each of the workers via the **ssh** command.

3. After running codes close the `cluster object`.Some cluster types may be automatically stopped when the R session exits, but it's good practice to close it. Function: `stopCluster(<cluster object>)`.

Overview: Talk Hadoop without ever leaving the R interpreter.
Solves: Single-threaded, memory-bound.
Pros: Closer to a native R experience than R+Hadoop; use pure R code for your Map-
Reduce operations.
Cons: Requires a Hadoop cluster; requires extra setup on the cluster; cannot process
standard SequenceFiles (for binary data).
Segue
Overview: Seamlessly send R apply-like calculations to a remote Hadoop cluster.
Solves: Single-threaded, memory-bound.
Pros: Abstracts you from Elastic MapReduce management.
Cons: Cannot use with an internal Hadoop cluster (you’re tied to Amazon’s Elastic
MapReduce).


## multicore
Overview: Good for big-CPU problems when setting up a Hadoop cluster is too much
of a hassle. Lets you parallelize your R code without ever leaving the R interpreter.
Solves: Single-threaded.
Pros: Simple and efficient; easy to install; no configuration needed.
Cons: Can only use one machine; doesn’t support Windows; no built-in support for
parallel random number generation (RNG).
parallel
Overview: A merger of snow and multicore that comes built into R as of R 2.14.0.
Solves: Single-threaded, memory-bound.
Pros: No installation necessary; has great support for parallel random number
generation.
Cons: Can only use one machine on Windows; can be difficult to configure on multiple
Linux machines.
R+Hadoop
Overview: Run your R code on a Hadoop cluster.
Solves: Single-threaded, memory-bound.
Pros: You get Hadoop’s scalability.
Cons: Requires a Hadoop cluster (internal or cloud-based); breaks up a single logical
process into multiple scripts and steps (can be a hassle for exploratory work).
RHIPE
Overview: Talk Hadoop without ever leaving the R interpreter.
Solves: Single-threaded, memory-bound.
Pros: Closer to a native R experience than R+Hadoop; use pure R code for your Map-
Reduce operations.
Cons: Requires a Hadoop cluster; requires extra setup on the cluster; cannot process
standard SequenceFiles (for binary data).
Segue
Overview: Seamlessly send R apply-like calculations to a remote Hadoop cluster.
Solves: Single-threaded, memory-bound.
Pros: Abstracts you from Elastic MapReduce management.
Cons: Cannot use with an internal Hadoop cluster (you’re tied to Amazon’s Elastic
MapReduce).