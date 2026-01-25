In Haskell, we can use default values for arguments in functions. This means that if a value for that argument is not passed in when the function is called, the default value will be used. Here's an example of how to use default values for function arguments in Haskell:

```
addNumbers :: Int -> Int -> Int -> Int
addNumbers x y z = x + y + z

addTwoNumbers :: Int -> Int -> Int
addTwoNumbers x y = addNumbers x y 0

```
In the above example, the function `addNumbers` takes three integer arguments and returns their sum. The function `addTwoNumbers` takes two integer arguments and uses `addNumbers` as a helper function to calculate their sum. The third argument of `addNumbers` is set to 0 by default. 

Now, let's say we want to call the `addNumbers` function with only two arguments. Instead of passing in a value for the third argument, we can just leave it out and the default value 0 will be used:

```
addNumbers 1 2         -- returns 3
addNumbers 1 2 3       -- returns 6

addTwoNumbers 1 2      -- returns 3
```

As we can see in the above example, by setting a default value for an argument, we can make it optional, which provides more flexibility when calling the function.