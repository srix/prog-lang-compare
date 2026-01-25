In Haskell, you can convert a string to an integer using the `read` function. The `read` function takes a string as an argument and returns a value of a specific type based on the context in which it is used.

To convert a string to an integer, you can use the `read` function along with the `::` syntax to specify the specific type of integer you want the string to be converted to. Here is an example:

```haskell
-- Convert a string to an Integer
stringToInt :: String -> Integer
stringToInt str = read str :: Integer
```

In this example, `stringToInt` is a function that takes a string as a parameter and returns an integer of type `Integer`. The `read` function is used to convert the string to an integer, and the `:: Integer` syntax is used to specify that the resulting value should be an `Integer`. Here are some examples of the `stringToInt` function in action:

```haskell
-- Convert the string "123" to an Integer
stringToInt "123" -- Returns 123

-- Convert the string "-456" to an Integer
stringToInt "-456" -- Returns -456

-- Convert the string "abc" to an Integer (will throw an exception)
stringToInt "abc" -- Throws an exception because "abc" is not a valid integer
```

It's important to note that the `read` function can throw an exception if the string cannot be parsed as an integer. In the last example above, `stringToInt "abc"` would throw an exception because "abc" is not a valid integer. To avoid this, you can use the `readMaybe` function from the `Text.Read` module, which returns a `Maybe` value instead of throwing an exception.
