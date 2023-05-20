In Haskell, constants are used to assign fixed values to variables that cannot be changed throughout the program's execution. To declare a constant, you can use the `let` keyword followed by the name of the constant, an equal sign (which is read as "is defined as"), and the value of the constant.

Here's an example:

```
module Main where

-- declare constant `pi`
pi :: Double
pi = 3.14159

-- define a function that calculates the area of a circle
areaOfCircle :: Double -> Double
areaOfCircle r = pi * r * r

main :: IO ()
main = do
    -- calculate the area of a circle with radius 5
    let radius = 5
    let area = areaOfCircle radius
    putStrLn $ "The area of a circle with radius " ++ show radius ++ " is " ++ show area
```

In this example, we declare a constant `pi` and assign it the value `3.14159`. This constant is then used in the `areaOfCircle` function to calculate the area of a circle. Finally, in the `main` function, we declare two more variables `radius` and `area` using the `let` keyword and use them to calculate and display the area of a circle with radius 5.

Note that in Haskell, constant variables are not truly immutable as they can be redefined later in the code. However, it is considered bad practice to do so and should be avoided in most cases.