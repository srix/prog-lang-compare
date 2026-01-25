Closure is a fundamental concept in functional programming and Haskell is a great language to learn about it.

In Haskell, a closure is a function that has access to some variables in its environment, even after those variables are no longer in scope. This means that the function 'closes over' those variables and can use them even if they are not explicitly passed as arguments to the function.

Here's an example of a closure in Haskell:

```haskell
add :: Int -> Int -> Int 
add x = \y -> x + y
```

In this example, the `add` function takes an `Int` as an argument and returns a lambda function. The lambda function is the actual closure that has access to the `x` variable (the first argument to the `add` function).

Here's how you might use this closure:

```haskell
addFive :: Int -> Int 
addFive = add 5

addFive 7 -- returns 12
```

In this example, we declare a new function `addFive` that is created by partially applying the `add` function with an `x` value of 5. This means that `addFive` is a new closure that has access to the `x` value of 5, which it can then add to any `y` value that is passed in.

When we call `addFive` with `7` as an argument, it returns `12` (i.e., `5 + 7`).

So, you can use closures in Haskell to create new functions from existing ones by partially applying arguments, and those new functions can have access to variables from the original function.