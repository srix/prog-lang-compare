Float numbers are decimal numbers in Haskell. They can be declared and used just like any other data type in Haskell. Here's an example of how to use float numbers in Haskell:

```
-- Declare a variable of type float
myFloat :: Float
myFloat = 3.14

-- Declare a function that takes in two float numbers and returns their sum
addFloats :: Float -> Float -> Float
addFloats x y = x + y

-- Call the function with two float arguments
result :: Float
result = addFloats 3.14 2.71

-- Print the result to the console
main :: IO ()
main = print result
```

In this example, we declare a variable `myFloat` of type `Float` and assign it the value of `3.14`. We also define a function `addFloats` that takes in two float numbers and returns their sum. We call this function with two numeric arguments, `3.14` and `2.71`, and assign the result to the variable `result`. Finally, we print the result to the console using the `print` function. 

Note that float values are rounded to the nearest binary approximation, and thus can suffer from precision errors over long calculations. For more precision, Haskell offers the `Double` type, which represents double-precision floating-point numbers.