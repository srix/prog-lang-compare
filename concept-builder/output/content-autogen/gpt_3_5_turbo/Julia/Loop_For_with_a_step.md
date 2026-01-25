In Julia, the `for` loop is used to iterate over a collection of values such as arrays, tuples, or ranges. It follows the following syntax:

```
for <variable> in <range/collection>
    <statements>
end
```

Here, `<variable>` represents the loop variable which is assigned each value in `<range/collection>` one by one, and `<statements>` represent the code to be executed for each iteration.

If you want to perform a `for` loop with a step, you can add the `step` keyword and specify the step size after the range or collection. Here's an example to better illustrate how to use `for` with a step:

```
# Example 1: For loop over a range with step 2
for i in 1:2:10
    println(i)
end

# Output: 1 3 5 7 9

# Example 2: For loop over an array with step 3
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for i in arr[1:3:end]
    println(i)
end

# Output: 1 4 7
```

In the first example, we iterate over the range `1:2:10` with a step of 2. This means that we start from 1, increment by 2, and stop at 10. The loop variable `i` takes on the values 1, 3, 5, 7, and 9, which are printed out to the console.

In the second example, we iterate over the array `arr` with a step of 3. We use the indexing `[1:3:end]` to select every third element in the array starting from the first element. This means that the loop variable `i` takes on the values [1, 4, 7], which are printed out to the console.