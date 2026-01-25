To change all elements of an array in R, you can use the `[]` or `replace()` function.

Using the `[]` function:
```
# create an array
my_arr <- array(data = c(1,2,3,4,5), dim = c(5,1,1))

# change all elements to 0
my_arr[] <- 0
print(my_arr)
```
Output:
```
, , 1

     [,1]
[1,]    0
[2,]    0
[3,]    0
[4,]    0
[5,]    0
```

Using the `replace()` function:
```
# create an array
my_arr <- array(data = c(1,2,3,4,5), dim = c(5,1,1))

# change all elements to 0
my_arr <- replace(my_arr, TRUE, 0)
print(my_arr)
```
Output:
```
, , 1

     [,1]
[1,]    0
[2,]    0
[3,]    0
[4,]    0
[5,]    0
```

In both examples, we created an array `my_arr` with 5 elements. We then changed all elements to 0 using either the `[]` or `replace()` function. The resulting array had all elements set to 0.