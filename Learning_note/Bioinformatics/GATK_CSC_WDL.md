## Basic WDL

### Define a task

```
task <taskName> {
  <Inputs for task>
  <Inputs for task>
  <Inputs for task>
  
  command {
  <commands>
  }
  
  runtime{
  <runtime_control>
  }
  
  output{
  <varType> <varName>=<Value>
  }
}
```

### Pipe tasks

```
workflow <workflowName>{
  <Inputs for workflow>
  <Inputs for workflow>
  <Inputs for workflow>

  call <taskName>{
    <Inputs for task>
  }
  call <taskName>{
    <Inputs for task>
  }
}
```

## Scheme of the workflow

1. Linear chaining

```
call stepA
call stepB { input: in=stepA.out }
call stepC { input: in=stepB.out }
```

2. Multi-in/out

```
call stepC { input :
               in1=StepB.out1,
               in2=stepB.out2 }
```

3. Scatter-gather

You can scatter multiple (using wild card) files or multiple genetic regions.

```
Arry[File] inputFiles

scatter(oneFile in inputFiles){
  call stepA { input: in=oneFiles }
}

call stepB { input: files=stepA.out }
```

## Runtime parameters

* docker
* disks
* memory
* preemptible: https://cloud.google.com/compute/docs/instances/preemptible

## Two ways to run Cromwell

1. One-off

2. Server mode
* API endpoints
* More scalable
* Some devops needs
* Appropriate of production environments
* Call-caching

## Validate syntax
1. validate
```
java -jar womtool.jar validate <wdl_file>
```

## Input file

`<workflow_name>.<called_task_name>.<variable>`

WDL task have to write output to disk and read input from disk. Because it is designed to run on separated nodes. If your don't want to read and write, just keep them in one task.

## Womtools

https://cromwell.readthedocs.io/en/stable/
Generate a workflow graph from wdl file
`java -jar womtools.jar graph <wdl_file> > <cout_put.dot>`

