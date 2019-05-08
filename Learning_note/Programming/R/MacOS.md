# Using R/R studio under MacOS

## Set path to Java lib for R/R studio

### Problem

R can not load `rJava` package. It shows the error message whose last two lines like this:

```
  Reason:image not found 
Error: package ‘rJava’ could not be loaded
```

### Solution

I found the solution from this [stackoverflow question](https://stackoverflow.com/questions/30738974/rjava-load-error-in-rstudio-r-after-upgrading-to-osx-yosemite). It works for me.

1. Add JAVA HOME path to `.bashrc` or `.bash_profile`

Path to java home changes in different version of Mac OS. I googled it and found the path at https://alvinalexander.com/java/mac-os-x-java_home-location.

```
export JAVA_HOME="path/to/java/home/"
export LD_LIBRARY_PATH=$JAVA_HOME/lib/server
```

2. Reconfigured java from the command line:

```
sudo R CMD javareconf -n
```

3. -Check and set "java.home" option in R studio.-

I have changed the "java.home" value to the path to JAVA_HOME. However, when I solved this problem and check the value, it changed back to "NULL". So it is not necessary to set this option in R.

I think the reason of "java.home" automatically change back to "NULL" is that I just changed the value in the opened R session temporarily. When I open a new session, it will disappear.

```
# Check
options("java.home")

# set
options("java.home"="path/to/java/home/")
```

4. Create a link to the `path/to/java_home/lib/server/libjvm.dylib` in directory `/usr/local/lib`

```
sudo ln -f -s $(/usr/libexec/java_home)/lib/server/libjvm.dylib /usr/local/lib
```

`-f` force overwriting existing file/links

### Environment

OS: MacOS Mojave (v10.14.3)
R: version 3.5.3
R studio: version 1.2.1335
Java: 8 update 221
