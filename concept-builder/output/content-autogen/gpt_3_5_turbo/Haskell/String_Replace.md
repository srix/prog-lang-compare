In Haskell, we can replace a substring within a string using the `replace` function from the `Data.List` library.

Here's the syntax for the `replace` function:

```
replace :: Eq a => [a] -> [a] -> [a] -> [a]
```

where the first argument is the substring to be replaced, the second argument is the replacement substring, and the third argument is the original string.

Here's an example to demonstrate the usage of the `replace` function:

```haskell
import Data.List

main = do
  let originalString = "Hello, world!"
  let replacementString = "planet"
  let newString = replace "world" replacementString originalString
  putStrLn newString
```

In this example, the program replaces the substring "world" with the word "planet" in the original string "Hello, world!". The output is:

```
Hello, planet!
```

If the substring to be replaced is not found, the `replace` function does not modify the original string and returns the original string as it is.

Here's another example to demonstrate this case:

```haskell
import Data.List

main = do
  let originalString = "This is a sample string."
  let replacementString = "example"
  let newString = replace "notfound" replacementString originalString
  putStrLn newString
```

In this example, the substring "notfound" is not found in the original string, so the `replace` function returns the original string as it is. The output is:

```
This is a sample string.
```
