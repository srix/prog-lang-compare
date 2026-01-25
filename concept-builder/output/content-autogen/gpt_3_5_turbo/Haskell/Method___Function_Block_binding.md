Block binding in Haskell refers to defining a variable using the `let` keyword within a block of code. This variable is only valid within that block and cannot be accessed outside of it. 

Here is an example of using block binding in Haskell:

```
-- Define a function that calculates the circumference of a circle
circumference :: Float -> Float
circumference r = let piVal = 3.14159 -- define piVal within the block
                  in 2 * piVal * r     -- use piVal to calculate circumference
```

Here, we define the variable `piVal` using the `let` keyword within the block of code following the function definition. We then use this variable to calculate the circumference of a circle.

Another example is:

```
-- Define a function that takes a list of integers and returns their sum
sumList :: [Int] -> Int
sumList lst = let sumVal = sum lst -- define sumVal within the block
              in sumVal           -- return sumVal
```

Here, we define the variable `sumVal` using the `let` keyword within the block of code following the function definition. We then use this variable to calculate the sum of a list of integers.

Block binding is a useful tool in Haskell for defining variables within specific scopes and can make code more readable and maintainable.