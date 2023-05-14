To concatenate two or more strings in Python 3.10, you can use the "+" operator or the "join()" method. Here are some examples:

Using the "+" operator:

```
first_name = "John"
last_name = "Doe"
full_name = first_name + " " + last_name
print(full_name) # Output: John Doe
```

In this example, we define two string variables, `first_name` and `last_name`, and then concatenate them using the "+" operator. We also add a space in between the two names to ensure that there is space between the two names.

Using the "join()" method:

```
words = ["Hello", "world", "!"]
sentence = " ".join(words)
print(sentence) # Output: Hello world !
```

In this example, we define a list of words and then use the `join()` method to concatenate them into a sentence. The `join()` method takes a list and joins all the elements of the list into a single string, using the string that calls the method as the separator. In this case, we use a space as the separator between the words.