In Haskell, you can convert an integer to a float by using the `fromIntegral` function. Here is an example:

```
-- Convert an integer to a float
let myInt = 10
let myFloat = fromIntegral myInt :: Float
```

In the code above, we define an integer `myInt` with a value of 10. We then use the `fromIntegral` function to convert it to a `Float` by specifying the desired type in the type signature. The resulting `myFloat` variable will have the value of 10.0 as a float.

Another example would be:

```
-- Convert the sum of two integers to a float
let int1 = 5
let int2 = 7
let mySum = int1 + int2
let myFloatSum = fromIntegral mySum :: Float
```

In this code snippet, we define two integers `int1` and `int2` with values of 5 and 7 respectively. We then add them together and store the result in `mySum`. Finally, we use `fromIntegral` to convert `mySum` to a `Float` and store it in `myFloatSum`. The resulting `myFloatSum` variable will have the value of 12.0 as a float.