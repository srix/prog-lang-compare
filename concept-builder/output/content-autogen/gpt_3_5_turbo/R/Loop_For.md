In R, `for` is a loop construct used to repeatedly execute a set of statements (code). Here is the general syntax for a `for` loop:

```
for (variable in sequence) {
  statements to execute
}
```

In the above syntax, `variable` is the iteration variable that takes on the value of each element in the `sequence`. For example, if `sequence` is a vector of length 5, then `variable` will take on the value of each of the 5 elements in the vector. The `statements to execute` are the code lines that will be executed for each iteration of the loop. 

Here's an example to help illustrate this:

```
for (i in 1:5) {
  print(i)
}
```

In this example, the loop will iterate five times (for i = 1, 2, 3, 4, 5) and will print the value of `i` at each iteration.

Another example:

```
vector <- c("apple", "banana", "orange", "grape", "pineapple")

for (fruit in vector) {
   print(fruit)
}
```

In this example, the loop iterates over the elements of the `vector` and prints each fruit in the vector. The loop will execute five times (one for each fruit in the vector). 

Note that the sequence used in a `for` loop can be any sequence object in R such as a vector, list or array. The loop can also be nested within another `for` loop or any other loop construct in R.