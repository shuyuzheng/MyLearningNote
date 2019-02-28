##  work environment setting

* clean all the stuffs in your environment

``` r
rm(list = ls(all = TRUE))
```

* move up one directory without entering the absolute path.

``` r
setwd("..")
```

* Temporarily shut down the warning message. **Remember to change it back after the block**. You will feel confusing if the code doesn't work without any error messages.

``` r
options(show.error.messages = F)
```

# workflow control

* show message when running for loop

``` r
for (i in vector){
    message(i, "\r", appendLF = FALSE)
    flush.console()
    # your processing here
}
```

# string manipulation

* format string in R, just like the `string.format()` in Python.

``` r
sprintf(formatted_string, format)
```

* trim the leading and tailing whitespace of a string

``` r
# 1. using R base function and Regex
gsub("^\\s+|\\s+$", "", string)

# 2. using stringr package
library(stringr)
str_trim(string)
```