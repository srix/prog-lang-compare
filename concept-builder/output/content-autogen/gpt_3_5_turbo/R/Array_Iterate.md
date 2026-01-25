In R, you can iterate over an array using loops. There are different types of loops that you can use in R, including for loops, while loops, and repeat loops. 

For example, let's consider the following array:
```
my_array <- c(10, 20, 30, 40, 50)
```

We can iterate over this array using a for loop as follows:

```r
for (i in 1:length(my_array)) {
  print(my_array[i])
}
```

This loop will print each element of the array on a new line.

Alternatively, we can iterate over the array using a while loop as follows:

```r
i <- 1
while (i <= length(my_array)) {
  print(my_array[i])
  i <- i + 1
}
```

This loop will also print each element of the array on a new line.

Additionally, we can iterate over the array using a repeat loop as follows:

```r
i <- 1
repeat {
  print(my_array[i])
  i <- i + 1
  if (i > length(my_array)) {
    break
  }
}
```

This loop will also print each element of the array on a new line, and will exit once it reaches the end of the array.

Overall, the choice of using for, while, or repeat loop depends on the specific task you want to achieve or the specific data structure you are working with.