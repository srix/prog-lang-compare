In Python 3.10, you can compare strings using the comparison operators such as '==', '!=', '<', '>', '<=' and '>='. These operators compare the characters in the strings by their Unicode code point values. Here are some examples:

1. Using the '==' operator:

```
string1 = "Hello, world!"
string2 = "Hello, World!"
if string1 == string2:
    print("The strings are equal.")
else:
    print("The strings are not equal.")
```

Output:

```
The strings are not equal.
```

2. Using the '!=' operator:

```
string1 = "Hello, world!"
string2 = "Hello, World!"
if string1 != string2:
    print("The strings are not equal.")
else:
    print("The strings are equal.")
```

Output:

```
The strings are not equal.
```

3. Using the '<' operator:

```
string1 = "apple"
string2 = "banana"
if string1 < string2:
    print("string1 comes before string2.")
else:
    print("string2 comes before string1.")
```

Output:

```
string1 comes before string2.
```

4. Using the '>' operator:

```
string1 = "apple"
string2 = "banana"
if string1 > string2:
    print("string1 comes after string2.")
else:
    print("string2 comes after string1.")
```

Output:

```
string2 comes after string1.
```

5. Using the '<=' operator:

```
string1 = "apple"
string2 = "banana"
if string1 <= string2:
    print("string1 comes before or is equal to string2.")
else:
    print("string2 comes before string1.")
```

Output:

```
string1 comes before or is equal to string2.
```

6. Using the '>=' operator:

```
string1 = "apple"
string2 = "banana"
if string1 >= string2:
    print("string1 comes after or is equal to string2.")
else:
    print("string2 comes after string1.")
```

Output:

```
string2 comes after string1.
```