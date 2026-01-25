In R, you can iterate over an array with index using a for loop. Here's an example:

```
my_array <- c(2, 4, 6, 8, 10)

for(i in 1:length(my_array)) {
  print(paste("Element", i, "is", my_array[i]))
}
```

Output:
```
[1] "Element 1 is 2"
[1] "Element 2 is 4"
[1] "Element 3 is 6"
[1] "Element 4 is 8"
[1] "Element 5 is 10"
```

In this example, we use the `length()` function to obtain the length of the array and then loop through the array, accessing each element by its index using the square bracket notation. The `paste()` function is used to concatenate the index and element values into a single string for printing.