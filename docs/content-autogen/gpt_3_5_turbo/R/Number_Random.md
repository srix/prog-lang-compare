In R, there are different functions that allow us to generate random numbers. Some of them are:

1. `runif(n, min = 0, max = 1)`: This function generates random uniform numbers between `min` and `max`. The argument `n` specifies the number of random numbers to be generated.

Example: Generate 5 random uniform numbers between 1 and 10.

```
runif(5, min = 1, max = 10)
```

Output:
```
[1] 7.213822 7.005641 9.681630 9.848090 5.596004
```

2. `rnorm(n, mean = 0, sd = 1)`: This function generates random normal numbers with mean `mean` and standard deviation `sd`. The argument `n` specifies the number of random numbers to be generated.

Example: Generate 5 random normal numbers with mean 10 and standard deviation 2.

```
rnorm(5, mean = 10, sd = 2)
```

Output:
```
[1]  9.088027  9.019824 10.952501 11.259537 12.487811
```

3. `sample(x, size, replace = FALSE)`: This function generates random samples of size `size` from the vector `x`. The argument `replace` specifies whether the sampling should be done with or without replacement.

Example: Generate 5 random samples from the vector `c(1, 2, 3, 4, 5)` without replacement.

```
sample(c(1, 2, 3, 4, 5), 5, replace = FALSE)
```

Output:
```
[1] 3 2 4 5 1
```

These are just a few examples of the many functions available in R for generating random numbers.