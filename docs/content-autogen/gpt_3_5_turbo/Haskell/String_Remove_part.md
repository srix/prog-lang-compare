In Haskell, you can remove a part of a string using the `Data.List` module. There are several functions available in this module that allow you to manipulate strings. One function that can be used to remove part of a string is `delete`.

The `delete` function removes the first occurrence of a substring from a string. Here's an example:

```
import Data.List

removeString :: String -> String
removeString str = delete "world" str

main = do
  let str = "hello world"
  putStrLn (removeString str)
```

In this example, the `removeString` function removes the substring "world" from the given string using the `delete` function. The output of this program will be "hello ".

Another function that can be used to remove part of a string is `take`. The `take` function returns the first `n` characters of a given string. Here's an example:

```
removeChars :: Int -> String -> String
removeChars n str = drop n str

main = do
  let str = "hello world"
  putStrLn (removeChars 5 str)
```

In this example, the `removeChars` function removes the first `n` characters of the given string using the `drop` function. The output of this program will be " world".
