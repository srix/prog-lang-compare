In R, you can convert an integer to a string using the `as.character()` function. Here are some examples:

Example 1: Convert the integer 42 to a string
```R
num <- 42
str <- as.character(num)
print(str)  # Output: "42"
```

Example 2: Convert a vector of integers to a vector of strings
```R
nums <- c(1, 2, 3, 4)
strs <- as.character(nums)
print(strs)  # Output: "1" "2" "3" "4"
```

Example 3: Convert a matrix of integers to a matrix of strings
```R
nums <- matrix(c(1, 2, 3, 4), nrow=2)
strs <- matrix(as.character(nums), nrow=2)
print(strs)  # Output:     [,1] [,2]
                        [1,] "1"  "3" 
                        [2,] "2"  "4"
``` 

In each example, the `as.character()` function is used to convert the integer(s) to a string(s) and assign the result to a variable. In Example 2 and 3, the `as.character()` function is applied to a vector and a matrix respectively, resulting in vectors and matrices of strings.