In Ruby, to create a string, you can enclose a sequence of characters within either single quotes (`'`) or double quotes (`"`). Here are some examples:

1. Using single quotes:
```
name = 'John'
```
In this example, the string 'John' is assigned to the variable `name`.

2. Using double quotes:
```
text = "This is a sample text."
```
Here, the string "This is a sample text." is assigned to the variable `text`.

3. Escaping characters:
```
phrase = "I'm learning Ruby!"
```
In this example, we used double quotes to include the apostrophe in "I'm" by escaping it with a backslash (\).

4. Multi-line strings:
```
lyrics = "Wise men say\nOnly fools rush in\nBut I can't help\nFalling in love with you"
```
Here, we used double quotes and escaped the newline character (\n) to create a multi-line string.

Note that you can also create a string using string interpolation, which allows you to embed Ruby code within a string. For example:
```
age = 27
greeting = "Hello, my age is #{age}"
puts greeting
# Output: Hello, my age is 27
```