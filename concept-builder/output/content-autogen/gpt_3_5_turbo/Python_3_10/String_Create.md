To create a string in Python 3.10, you can simply enclose text in either single quotes ('...') or double quotes ("..."). Here are some examples:

```python
# Assigning a string to a variable
message = "Hello, World!"
print(message)

# Using single quotes
greeting = 'Hi there!'
print(greeting)

# Including quotes inside a string using escape characters
quote = "She said, \"Let's go to the movies!\""
print(quote)

# Concatenating strings using the + operator
first_name = "John"
last_name = "Doe"
full_name = first_name + " " + last_name
print(full_name)

# Using the .format() method to insert values into a string
age = 30
message = "I am {} years old".format(age)
print(message)
```

Output:
```
Hello, World!
Hi there!
She said, "Let's go to the movies!"
John Doe
I am 30 years old
```

Note that in Python, strings are immutable, which means that once a string is created, it cannot be changed. Instead, a new string must be created with the desired modifications.