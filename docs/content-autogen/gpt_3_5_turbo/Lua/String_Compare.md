To compare strings in Lua, you can use the comparison operators `==`, `<` and `>`. Here are some examples:

```
-- using == operator
if "hello" == "hello" then
  print("Strings are equal.")
else
  print("Strings are not equal.")
end

-- using < operator
if "apple" < "banana" then
  print("Apple comes before banana in the alphabet.")
else
  print("Apple comes after banana in the alphabet.")
end

-- using > operator
if "banana" > "apple" then
  print("Banana comes after apple in the alphabet.")
else
  print("Banana comes before apple in the alphabet.")
end
```

In the first example, the `==` operator is used to check if the two strings are equal. The output will be "Strings are equal."

In the second example, the `<` operator is used to compare two strings alphabetically. Since "apple" comes before "banana" in the alphabet, the output will be "Apple comes before banana in the alphabet."

In the third example, the `>` operator is used to compare two strings alphabetically. Since "banana" comes after "apple" in the alphabet, the output will be "Banana comes after apple in the alphabet."