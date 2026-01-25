In Groovy, you can split a string into substrings by calling the split() method on the string, passing in a regular expression pattern or a string delimeter as an argument. The method then returns an array of substrings.

Here's an example using a string delimeter:",":

```
def str = "apple,banana,orange"
def arr = str.split(',')
println arr // Output: ['apple', 'banana', 'orange']
```

Here's an example using a regular expression pattern:

```
def str = "apple1banana2orange3"
def arr = str.split(/\d/)
println arr // Output: ['apple', 'banana', 'orange', '']
```

In the second example, the regular expression pattern `/\d/` matches any digit, and is used as the delimiter for splitting the string. This produces an array of strings with the digits removed. Note that in this example, the last value in the array is an empty string, since the pattern occurs at the end of the string.