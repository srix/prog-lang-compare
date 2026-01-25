To return an array in R, you can create an array using the "array" function and then simply return it using the "return" function.

Here is an example of creating and returning an array:

```R
# creating a 2x3x4 array
my_array <- array(1:24, dim=c(2,3,4))

# defining a function to return the array
return_array <- function() {
   return(my_array)
}

# calling the function to return the array
return_array()
```

Output:

```
, , 1

     [,1] [,2] [,3]
[1,]    1    3    5
[2,]    2    4    6

, , 2

     [,1] [,2] [,3]
[1,]    7    9   11
[2,]    8   10   12

, , 3

     [,1] [,2] [,3]
[1,]   13   15   17
[2,]   14   16   18

, , 4

     [,1] [,2] [,3]
[1,]   19   21   23
[2,]   20   22   24
```

In this example, we created a 2x3x4 dimensional array using the "array" function and assigned it to the variable "my_array". We then defined a function "return_array" which simply returns the "my_array" variable. Lastly, we called the function "return_array" which returns the 3D array as output.