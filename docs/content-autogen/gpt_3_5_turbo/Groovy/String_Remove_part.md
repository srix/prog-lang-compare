In Groovy, you can remove a part of a string using the `remove()` method. This method takes two parameters - the starting index of the substring to be removed and the ending index (which is optional).

Here's an example:

```
def str = "Hello World"
def result = str.remove(0, 5)
println result
```

In this example, we have a string "Hello World". The `remove()` method is used to remove the first 5 characters (starting from index 0), which results in the output " World".

If you do not specify the ending index, the `remove()` method will remove all characters from the starting index to the end of the string. For example:

```
def str = "Hello World"
def result = str.remove(6)
println result
```

In this example, the `remove()` method is used to remove all characters from index 6 to the end of the string, which results in the output "Hello ".