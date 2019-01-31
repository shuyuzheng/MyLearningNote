# clean data and order
* `quantile(vector)`: check the quantile of the vector of numbers, default is 0, 25%, 50%, 75%.
    * `na.rm = TRUE`: remove the NA.
    * `prob = c(0.20, 0.40)`: check the quantile at 20% or 40%.

* `table(rowname, colname)`: generate a table.
    * `useNA="ifany"`: count the number of NA.

* `any()`: check if any item is TRUE.

* `all(condition)`: check if all items satisfies the _condition_.

* `colSums()` or `rowSums()`: sum the values in all columns or rows.

* `xtabs(value ~ rowname + colname, data)`: generate a cross table that show the _value_ 
    * _value_ could be `Freq`(frequency) or value of another column.
    * `value ~.`: generate cross tables for every pairs of variables.

* `ftable(cross_table)`: flatten multiple cross tables into one table.

* `object.size(data)`: check size of data by bytes.
    * `print(object.size(data), units = 'Mb')`: show data size in _Mb_. `Gb` can also be used.
    
# Add variables
* `seq(along = x)` is equal to `seq(length = lenght(x))`.

* `ifelse(condition, value for TRUE, Value for FALSE)`: 

* `cut(variable, breaks = points)`: cut _variable_ at the break _points_ (e.g. `quantile(variable)`).

* `cut2(variable, g = n)`{Hmisc package}: cut the data into _n_ groups

* common transforms:
              function           |                    description
    ---------------------------- | --------------------------------------------------
    `abs()`                      | absolute value
    `sqrt()`                     | square root
    `ceiling()`                  | the ceiling integer
    `floor()`                    | the floor integer
    `round(x, digits = n)`       | get the round of _x_ with _n_ digits after decimal
    `signif(x, digits = n)`      | signif(3.475, digits = 2) is 3.5
    `cos()`, `sin()`...          | cosine, sine ...
    `log()`, `log2()`, `log10()` | ln, log2, log10
    `exp()`                      | exponent
    `as.POSIXlt(date)$year`      | extract _year_ from _date_

# Reshaping data
* `melt(data, id = id_variables, measure.vars = measure_variables)`: melt the data frame.

* `dcast(data, id ~ measure_variables, function)`: recast data frame into a new shape.

* `split(split_variable, index_variable)`: split the *split_value* by *index_variable*

* `lapply(list, function)`: apply _function_ to _list_

# Merge data
* `merge(x, y, by, by.x, by.y, all = TRUE)`: merge two data frames (x, y).

* `intersect(vector1, vector2)`: get the intersection of two vectors.

# `tidy` package
* `gather(data, key = "key", value = "value", -except)`: takes multiple columns and collapses into **key-value** pairs, duplicating all other columns as needed. `-` was added to the variables you don't want to put into the "value" column.

* `separate(data, col, into)`: Given either _regular expression_ or a vector of character positions, it turns a single character column into multiple columns.

* `spread(data, key, value)`: spread a key-value pair across multiple columns.

# `readr` package
* `parse_number(string)`：extract numbers from string

# Work with text
* `tolower()` or `toupper()`: change the case.

## replace string
* `strsplit()`: split strings with _sep_

* `sub(pattern, replace, string)`: replace first _pattern_ in _string_ with _replace_.

* `gsub(pattern, replace, string)`:

## find values
* `grep(pattern, string)`:
    * `value = TRUE`:

* `grepl(pattern, string)`:

## {stringr} package
* `nchar(string)`:

* `substr(string, start, end)`:

* `paste0()`:

* `str_trim()`:

# Regular expressions

## lines
* `^pattern`: lines start with _pattern_

* `pattern$`: lines end with _pattern_

## character classes
* `[Bb]`: match _B_ or _b_

* `[a-z]`: match a _range_ of letters.

* `.`: any one character.

* `|`: or

* `()`: wrap the patterns to get same operation.

* `(pattern1 pattern2)?`: pattern1 _or_ pattern2

* `*`: any number, including non, of the item.

* `+`: at least one of the item.

* `pattern{m,n}`:
    * `{m.n}` pattern occurrents at least _m_ times and at most _n_ times.
    * `{m}`: exactly _m_ times.
    * `{m,}`: at least _m_ times.

# Date
* `date()`: generate a **charactera** shows the time when calling.

* `Sys.Date()`: generate a **date** of the calling.

* `format(date, "%a %b %d")`: format _date_
    * `%d`: day
    * `%a`: abbreviated weekday
    * `%A`: unabbreviated weekday
    * `%m`: month as number
    * `%b`: abbreviated month
    * `%B`: unabbreviated month
    * `%y`: 2 digit year
    * `%Y`: 4 digit year

* `as.Date(string, pattern)`: turn _string_ into _date_ by _pattern_

* `weedays(date)`:

* `months(date)`:

* `julian(date)`:

## {lubridate} package

* `ymd_hms(string)`: format string to _year-month-day hour:minute:second_ pattern

* `wday(string)`: get weekday from _string_
