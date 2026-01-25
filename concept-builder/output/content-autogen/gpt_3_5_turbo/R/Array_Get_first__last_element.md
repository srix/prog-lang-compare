To get the first and last element of an array in R, you can use the indexing operator [] combined with the functions `head()` and `tail()`:

Here is an example:

```
#creating an array with 6 numeric values
my_array <- c(13, 45, 28, 78, 92, 55)

#getting the first element of the array
first_element <- my_array[1]

#getting the last element of the array
last_element <- my_array[length(my_array)]

print(first_element)
#Output: 13

print(last_element)
#Output: 55
```

Alternatively, you can make use of `head()` and `tail()` functions for the same:

```
#creating an array with 6 numeric values
my_array <- c(13, 45, 28, 78, 92, 55)

#getting the first element of the array using head function
first_element <- head(my_array,1)

#getting the last element of the array using tail function
last_element <- tail(my_array,1)

print(first_element)
#Output: 13

print(last_element)
#Output: 55
```

In both cases, `first_element` and `last_element` store the first and last element of the array `my_array` respectively.