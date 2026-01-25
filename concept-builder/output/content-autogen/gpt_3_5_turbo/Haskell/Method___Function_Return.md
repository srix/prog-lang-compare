To return a value from a function or method in Haskell, we use the `return` keyword. The `return` keyword can be used in any function to return a value of a specific type.

Here's an example of a simple function that returns a value:

```
addNumbers :: Int -> Int -> Int
addNumbers x y = x + y
```

In this code, the `addNumbers` function takes two integer arguments and returns their sum as an integer. The `return` keyword is not explicitly used here, but the function body implicitly returns the integer value.

Here's an example of a function that uses the `return` keyword:

```
calculateArea :: Double -> Double -> Double
calculateArea l w = return (l * w)
```

In this example, the function calculates the area of a rectangle given its length and width. The `return` keyword is used to explicitly return the calculated value of the area.

It's worth noting that the `return` keyword is optional in Haskell functions. In the absence of the keyword, Haskell uses lazy evaluation to automatically return the result of the last expression in the function body.