In Lua, you can use the `string.gmatch()` function along with a pattern to split a string. Here's an example:

```
local str = "Hello, world!"
local words = {}

for word in string.gmatch(str, "%S+") do
  table.insert(words, word)
end

for _, word in ipairs(words) do
  print(word)
end
```

In this example, we start by defining a string `str` that we want to split. We also define an empty table `words` that we'll use to store the individual words.

We then use a `for` loop and the `string.gmatch()` function to split the string. The pattern `"%S+"` matches one or more non-space characters (i.e. a word). Each time `string.gmatch()` finds a match, it returns that word to the `for` loop variable `word`. We insert each `word` into our `words` table using the `table.insert()` function.

Finally, we loop through our `words` table and print each word.

The output of the program would be:

```
Hello,
world!
```

Note that the punctuation mark at the end of "Hello," is included in the first word. If you want to exclude it, you can use the pattern `"%S+"` instead.