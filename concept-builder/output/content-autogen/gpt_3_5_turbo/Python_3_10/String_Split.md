In Python 3.10, you can split a string into several smaller strings using the `str.split()` method. Here's an example:

```
string = "The quick brown fox jumps over the lazy dog"
split_string = string.split()

print(split_string)
```

Output:

```
['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
```

In this example, we defined a string variable `string` with a sentence. We then used the `split()` method to split this sentence into individual words. The resulting list of words is stored in the variable `split_string` and then printed.

You can also specify a separator to be used to split the string. For example, if you want to split a string based on whitespace characters, you can use:

```
string = "The-quick-brown-fox-jumps-over-the-lazy-dog"
split_string = string.split("-")

print(split_string)
```

Output:

```
['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
```

In this example, we used the separator `-` instead of whitespace. The resulting list of words is the same as the previous example, even though the original string uses dashes instead of spaces to separate the words.

You can also limit the number of splits that are performed by specifying a maximum split count:

```
string = "The quick brown fox jumps over the lazy dog"
split_string = string.split(maxsplit=2)

print(split_string)
```

Output:

```
['The', 'quick', 'brown fox jumps over the lazy dog']
```

In this example, we specified a maximum split count of 2. Therefore, the original string was split into only two parts - the first two words and the rest of the sentence.