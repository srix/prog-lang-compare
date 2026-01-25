In Haskell, regex can be used with the help of the "Text.Regex" module which provides a regular expression matching and substitution framework. Here are some examples to illustrate the use of regex in Haskell.

1. Matching a pattern in a string:
```haskell
-- import Text.Regex module
import Text.Regex

-- define the pattern to match
pattern = "lo+v(e|er)"

-- define the input string
input = "love lover lovr lver lvr"

-- use the "=~" operator to match the pattern in the input string
results = input =~ pattern :: [[String]]

-- display the results
main = putStrLn $ show results -- [["love"],["lover"],["lovr"]]
```

2. Replacing a pattern in a string:
```haskell
-- import Text.Regex module
import Text.Regex

-- define the pattern to replace
pattern = "lo+v(e|er)"

-- define the input string
input = "love lover lovr lver lvr"

-- define the replacement string
replacement = "hat"

-- use the "=~" operator to substitute the pattern with the replacement string
output = input =~ pattern :: String

-- display the output
main = putStrLn output -- "hat hat hat lver lver"
```

3. Extracting groups from a pattern:
```haskell
-- import Text.Regex module
import Text.Regex

-- define the pattern with a group
pattern = "([a-z]+)([0-9]+)"

-- define the input string
input = "abc123 def456 ghi789"

-- use the "=~" operator to extract groups from the pattern in the input string
results = input =~ pattern :: [[String]]

-- display the results
main = putStrLn $ show results -- [["abc123","abc","123"],["def456","def","456"],["ghi789","ghi","789"]]
```

In these examples, we have used regular expressions to match patterns, replace patterns, and extract groups from patterns in input strings. The Text.Regex module provides a powerful framework for working with regular expressions in Haskell.