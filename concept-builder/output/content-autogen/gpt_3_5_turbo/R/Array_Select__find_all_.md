To find all elements of an array satisfying a condition in R, you can use the logical operator `[]` to subset the array based on the condition. Here are a few examples:

Example 1: Suppose we have an array `x` containing the following elements: 

```
x <- array(c(1:16), dim=c(4,4))
```

And we want to find all elements in `x` that are greater than 10.

We can use the following code:

```
x[x > 10]
```

This will output the following vector: 

```
[1] 11 12 13 14 15 16
```

Example 2: Suppose we have an array `y` containing the following elements: 

```
y <- array(c(3, 6, 9, 12, 15, 18, 21, 24), dim=c(2,2,2))
```

And we want to find all elements in `y` that are divisible by 3. 

We can use the following code:

```
y[y %% 3 == 0]
```

This will output the following vector: 

```
[1]  3  9 15 21
```

In both of these examples, we used the logical operator `[]` with a condition inside to subset the array. The condition was evaluated for each element in the array, and any element that evaluated to `TRUE` was included in the subset.