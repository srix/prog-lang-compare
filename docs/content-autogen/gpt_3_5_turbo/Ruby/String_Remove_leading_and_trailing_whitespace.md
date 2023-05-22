In Ruby, we can use the `strip` method to remove both leading and trailing whitespaces from a string. Here's how:

Example 1:
```
str = "   hello world   "
new_str = str.strip
puts new_str
```
Output:
```
"hello world"
```

Example 2:
```
str = "  I love Ruby programming! "
new_str = str.strip
puts new_str
```
Output:
```
"I love Ruby programming!"
```

As you can see, the `strip` method removes all leading and trailing whitespaces from the string, leaving only the desired characters.