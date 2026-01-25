In Go, a string is a collection of characters enclosed within double quotes " ". To declare a string variable, the syntax is:

```
var myString string = "Hello, World!"
```

Here, "myString" is the name of the variable that stores the string "Hello, World!".

Alternatively, we can also declare and assign a string variable without specifying its type:

```
myString := "Hello, World!"
```

This is known as "type inference".

We can also create a string by converting an array of bytes using the `string()` function. For example:

```
byteArray := []byte{'H', 'e', 'l', 'l', 'o'}
myString := string(byteArray)
```

In this example, we create a byte array with the characters "Hello" and then convert it to a string.

Finally, we can also concatenate two or more strings using the `+` operator. For example:

```
greeting := "Hello, "
name := "John"
message := greeting + name
```

In this example, we create two strings "Hello, " and "John" and concatenate them using the `+` operator to form the string "Hello, John".