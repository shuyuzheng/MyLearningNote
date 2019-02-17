#  work environment setting
* clean all the stuffs in your environment
```
rm(list = ls(all = TRUE))
```

* move up one directory without entering the absolute path.
```
setwd("..")
```

* Temporarily shut down the warning message. **Remember to change it back after the block**. You will feel confusing if the code doesn't work without any error messages.
```
options(show.error.messages = F)
```

# workflow control
* show message when running for loop

```
for (i in vector){
    message(i, "\r", appendLF = FALSE)
    flush.console()
    # your processing here
}
```

# string manipulation
* format string in R, just like the `string.format()` in Python.
```
sprintf(formatted_string, format)
```

* trim the leading and tialing whitespaces of a string

```
# 1. using R base function and Regex
gsub("^\\s+|\\s+$", "", string)

# 2. using stringr package
library(stringr)
str_trim(string)
```