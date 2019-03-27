# Efficient R programming

## General tips

* **Golden rule**: to access the underlying  C/Fortran routines as quickly as possible. The fewer functions calls required to achieve this, the better.
* If possible **pre-allocate** memory for your vector, data frame and lists and then fill in the values.
* **Vectorised** your code
* Communicate with users
  1. `stop()`: for fatal errors
  2. `warning`: for warnings
  3. `cat()`, `message()`: for informative output
  4. `invisible()`: return a temporarily invisible copy of an project. You can use it when you want to return a value in function when it is assigned but don't want to print it out when it is not assigned.

* Using functions in `apply` family to replace for loops
* Type consistency
* Caching variable by calling `memoise()`
* Function closure

## Efficient base R

* `ifelse()` slower than `if()`.
* `sort()` function:
  * the `"radix"` algorithm is the most computationally efficient option for most situations.
  * the `partial` argument can only show top n results but save the time for computing.

* `sort(x, decreading = TRUE)` is faster than `rev(sort(x))`
* `which.min()` is faster than `which(x == min(x))`
* Converting factors to numerics: `as.numeric(levels(f))[f]`
* `anyNA()` is faster than `any(is.na())`
* `matrix` is faster than `data.frame`
* `integer` is faster than `numeric`
* `sparseMatrix` in matrix computation to save storage. Package `Matrix`

## Parallel computing

`parallel` package, pre-installed in R since R 2.14.0

