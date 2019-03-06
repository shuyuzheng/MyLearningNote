# Checklist

## Do: Start with good science

* Garbage in, garbage out
* Coherent, focused question simplifies many problems
* Working with good collaborators reinforces good practices
* Something that's interesting to you

## Don't: Do things by hand

* Editing spreadsheets of data to "clean it up"
* Editing tables or figures
* Downloading data from a web site
* Moving data around your computer; spliting/ reformatting data files

## Don't: Point and click

Be careful with data analysis software that is **highly interactive**.

## Do: Teach a computer

* If something needs to be done as part of your analysis/investigation, try to teach your computer to do it.
* In order to give your computer instructions, you need to write down excactly what you meant to do and how can you tell computer to do.

## Do: Use some of version control

* Sometimes version control system makes you slow down and think "What I have donw"
* Add changes in small pieces

## Do: Keep track of your software enviroment

* Computer architecture: CPU, GPUs;
* Operating system: Win, Mac, linux/Unix;
* Software toolchain: Compilers, interpreters, command shell, programming languages, database backends, data analysis software;
* Supporting software/infrastructure: Libraries, R packages, dependencies;
* External dependencies: Web site, data repositories, remote databases, software repositories;
* Version numbers: for everything.

R: `sessionInfo()`

## Don't: Save Output

* Avoid saving data analysis output, except perhaps temporarily for efficiency purpose;
* Save the data + code that generated the output, rather than the output itself;
* Intermediate files are ok as long as there is clear documentation of how they were created.

## Do: Set your seed

Set a `seed` whenever you generate random numbers.  
R: `set.seed()`

## Do: Think about the entire pipeline

Raw data -- processed data -- analysis -- report