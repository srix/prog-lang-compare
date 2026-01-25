In R, we can check if an array includes a certain element by using the `%in%` operator or the `match()` function. Here are examples of each method:

1. Using `%in%` operator:
   ```R
   # Defining an array
   arr <- c(1, 3, 5, 7, 9)
   
   # Checking if the element 5 is in the array
   5 %in% arr
   # Output: TRUE
   
   # Checking if the element 6 is in the array
   6 %in% arr
   # Output: FALSE
   ```

2. Using `match()` function:
   ```R
   # Defining an array
   arr <- c("apple", "banana", "orange", "grape")
   
   # Checking if the element "apple" is in the array
   !is.na(match("apple", arr))
   # Output: TRUE
   
   # Checking if the element "kiwi" is in the array
   !is.na(match("kiwi", arr))
   # Output: FALSE
   ```

Note that in the `match()` function, we use the `is.na()` function to check if the returned value is not `NA` because the `match()` function returns `NA` if the element is not found in the array.