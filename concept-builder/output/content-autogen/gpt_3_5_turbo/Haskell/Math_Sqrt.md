In Haskell, you can get the square root of a number using the `sqrt` function from the `Prelude` module.

Here's an example of how to get the square root of a number in Haskell:

```haskell
-- Import the Prelude module to use the sqrt function.
import Prelude

-- Example function to get the square root of a number.
getSquareRoot :: Double -> Double
getSquareRoot x = sqrt x

-- Call the getSquareRoot function with an example value.
result = getSquareRoot 16.0
-- The result will be 4.0.
```

In the above example, we first import the `Prelude` module to use the `sqrt` function. We then define a function called `getSquareRoot` which takes a `Double` parameter `x` and returns the square root of `x` using the `sqrt` function. We then call the `getSquareRoot` function with an example value of `16.0` and store the result in the `result` variable. The result will be `4.0`.
