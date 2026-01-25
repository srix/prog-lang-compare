In Haskell, there are several ways to remove leading and trailing whitespaces from a string. One common method is to use the `Data.Text` module, which provides the `strip` function.

Here is an example of how to use `strip`:

```haskell
import Data.Text (strip)

-- strip leading and trailing whitespaces
strip "  Hello, world!  "  -- returns "Hello, world!"
```

In this example, the `strip` function removes all leading and trailing whitespaces from the input string "  Hello, world!  " and returns the result string "Hello, world!".

Alternatively, you can also use the `trim` function from the `Data.List.Utils` module:

```haskell
import Data.List.Utils (trim)

-- trim leading and trailing whitespaces
trim "  Hello, world!  "  -- returns "Hello, world!"
```

The `trim` function works similarly to `strip` and removes all leading and trailing whitespaces from the input string.

Regardless of which function you use, these methods will help you remove leading and trailing whitespaces from a string in Haskell.
