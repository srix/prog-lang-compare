In Haskell, you can split a string using the `splitOn` function from the `Data.List.Split` module. This function takes two arguments: the delimiter string and the input string.

Here is an example of how to use `splitOn`:

```
import Data.List.Split

inputString = "apples,bananas,grapes"
delimiter = ","

splitString = splitOn delimiter inputString

-- Output: ["apples","bananas","grapes"]
```

In this example, we import the `Data.List.Split` module that contains the `splitOn` function. We define the input string variable `inputString` and the delimiter variable `delimiter`. We then call the `splitOn` function with the delimiter and input string as arguments, and assign the result to `splitString`.

The result of `splitOn` is a list of strings, where each string is a component of the original string that was separated by the delimiter. In this example, the output is `["apples","bananas","grapes"]`.

You can also use other functions in the `Data.List.Split` module to split a string. For example, you can use `split` to split a string on a regular expression or `chunksOf` to split a string into chunks of a given length.
