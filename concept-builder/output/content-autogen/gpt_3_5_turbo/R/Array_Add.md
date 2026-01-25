To add an element to an array in R, you can use the `c()` function or the `append()` function. Here are some examples:

Using the `c()` function:

```
#Create an array
x <- array(c(1,2,3,4,5,6), dim=c(2,3))

#Add an element to the array
x <- c(x, 7)

#print the resulting array
x

Output:
[1] 1 3 5 2 4 6 7
```

Using the `append()` function:

```
#Create an array
x <- array(c(1,2,3,4,5,6), dim=c(2,3))

#Add an element to the array
x <- append(x, 7)

#print the resulting array
x

Output:
[1] 1 2 3 4 5 6 7
```

Note that in both cases we are adding an element to the end of the array. If you want to add an element at a specific position within the array, you can use the `[ ]` operator to do so.