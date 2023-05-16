To concatenate (combine) two or more strings in Python 3.10, you can use the `+` operator or the `join()` method.

Using the `+` operator:
```
# Declare variable with strings
first_name = "John"
last_name = "Doe"

# Concatenate the strings using +
full_name = first_name + " " + last_name
print(full_name)  # output: John Doe
```

Using the `join()` method:
```
# Declare a list of strings
words = ["hello", "world", "!"]

# Concatenate the strings using join()
message = " ".join(words)
print(message)  # output: hello world !
```

Note that `join()` is a more efficient method to concatenate strings when you have a large number of strings to concatenate, as it avoids creating multiple intermediate string objects.