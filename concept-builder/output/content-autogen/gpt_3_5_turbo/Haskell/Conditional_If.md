In Haskell, the `if` statement is used for conditional execution of code. It has the following syntax:

```
if <condition> then <expression1> else <expression2>
```

Here, `<condition>` is a boolean expression that is evaluated, and based on its value, either `<expression1>` or `<expression2>` is evaluated and returned as the result of the `if` statement.

For example, let's say we want to write a Haskell function that takes in two numbers and returns the larger number. We can use `if` statement to achieve this as follows:

```haskell
max :: Int -> Int -> Int
max x y = if x > y then x else y
```

In this code, we first define a function called `max` that takes in two integers `x` and `y`. Inside the function, we use an `if` statement to check if `x` is greater than `y`. If `x` is greater, we return `x` as the result of the function, otherwise we return `y`.

We can call this function as follows:

```haskell
main = do
    print (max 5 10) -- output: 10
    print (max 15 3) -- output: 15
    print (max 7 7) -- output: 7
```

In this code, we call `max` function using different input values and print the results to the console using the `print` statement.