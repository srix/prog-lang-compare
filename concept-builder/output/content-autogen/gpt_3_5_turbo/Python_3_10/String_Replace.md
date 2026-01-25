In Python 3.10, we can replace a substring within a string using the `replace()` method. It takes two arguments - the substring to be replaced and the new substring to be used as the replacement.

Here's an example:

```python
string = "Hello World"
new_string = string.replace("World", "Python")
print(new_string)
```

Output:
```
Hello Python
```

In the above example, we replaced the substring "World" with "Python" in the original string "Hello World". The `replace()` method returned the new string "Hello Python".

We can also replace multiple occurrences of a substring by specifying an optional third argument, which is the maximum number of replacements to make.

Here's an example:

```python
string = "Python is awesome, Python is powerful, and Python is popular"
new_string = string.replace("Python", "Java", 2)
print(new_string)
```

Output:
```
Java is awesome, Java is powerful, and Python is popular
```

In the above example, we replaced the first two occurrences of the substring "Python" with "Java" in the original string. The `replace()` method returned a new string "Java is awesome, Java is powerful, and Python is popular".