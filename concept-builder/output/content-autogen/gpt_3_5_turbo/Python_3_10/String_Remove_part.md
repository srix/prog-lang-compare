To remove part of a string in Python 3.10, you can use string slicing. Let's say we have a string "Hello World" and we want to remove the word "World" from it. Here's the code:

```
string = "Hello World"
new_string = string[:5]
print(new_string)
```

Output: "Hello"

Here, we used string slicing to remove the last 5 characters from the string "Hello World". The syntax for string slicing is `string[start:end]`, where `start` is the index where the slicing should begin and `end` is the index where it should end (but not include). In this case, `start` is 0 (the first character of the string) and `end` is 5 (before the space before "World"). So, the code above removes the last 5 characters from the string "Hello World" to get a new string "Hello".

Similarly, you can remove any part of a string by adjusting the `start` and `end` indices accordingly.