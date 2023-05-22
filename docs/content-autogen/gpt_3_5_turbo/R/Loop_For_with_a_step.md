The "for" loop is a control structure used in R to perform a task iteratively. It is used when we need to execute a block of code repeatedly a certain number of times. The syntax of for loop in R is as follows:

```r
for (iterator in sequence) {
    # perform some task here
}
```

Here, "iterator" is a variable that takes on the values in the "sequence" and allows us to perform an operation on each value in the sequence.

Now, let's look at an example of how to use a for loop with a step in R. Suppose we want to print out the even numbers between 1 and 10. We can do this using a for loop with a step of 2, as follows:

```r
for(i in seq(2, 10, by = 2)) {
  print(i)
}
```

Output:

```r
[1] 2
[1] 4
[1] 6
[1] 8
[1] 10
```

In the above code, we have used the "seq" function to create a sequence of numbers from 2 to 10, with a step of 2. The "for" loop then iterates over each value in this sequence and prints them out.

Another example would be to calculate the sum of all odd numbers between 1 and 10 using a for loop with a step of 2:

```r
sum_odd <- 0
for(i in seq(1, 10, by = 2)) {
  sum_odd <- sum_odd + i
}
print(sum_odd)
```

Output:

```r
[1] 25
```

In the above code, we have initialized a variable named "sum_odd" to 0, and then used a for loop with a step of 2 to iterate over the odd numbers between 1 and 10 and add them to the sum. Finally, we have printed out the sum of all odd numbers between 1 and 10.