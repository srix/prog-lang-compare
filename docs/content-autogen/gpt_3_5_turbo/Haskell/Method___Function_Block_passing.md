Block passing is a technique in Haskell that allows us to pass multiple arguments as a single complex argument in a function. This is achieved by using parentheses to group the arguments together and separating them with commas. The function can then deconstruct this complex argument and use the individual arguments.

Here is an example of passing two arguments to a function using block passing:

```haskell
add :: (Int, Int) -> Int
add (x, y) = x + y
```

In the above example, we define a function `add` that takes in a tuple of two integers as an argument using the block passing technique. The function then extracts the individual integers from the tuple and adds them together to get the result.

We can call the `add` function like this:

```haskell
mySum = add (5, 7) -- returns 12
```

Here is another example that illustrates the block passing technique with three arguments:

```haskell
multiply :: (Int, Int, Int) -> Int
multiply (x, y, z) = x * y * z
```

In this example, the `multiply` function takes in a tuple of three integers and returns the product of these three integers.

We can call the `multiply` function like this:

```haskell
myProduct = multiply (2, 3, 4) -- returns 24
```

In summary, block passing is useful in Haskell when we need to pass multiple arguments to a function, and we want to group them together to simplify the function signature. This technique can also make the code more readable and make it easier to work with complex data types.