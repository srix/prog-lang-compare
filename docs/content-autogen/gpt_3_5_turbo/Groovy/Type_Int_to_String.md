Converting an integer to a string in Groovy can be done by using the `toString()` method. Here's a simple example:

```
def myInt = 123
def myString = myInt.toString()
println "The integer is $myInt and the string is $myString"
```

When you run this code, you should see the following output:

```
The integer is 123 and the string is 123
```

Note that the `toString()` method will create a new string object containing the textual representation of the integer value.

You can also use string interpolation to convert an integer to a string in Groovy:

```
def myInt = 456
def myString = "$myInt"
println "The integer is $myInt and the string is $myString"
```

This code will produce the same output as the previous example. In this case, Groovy will automatically convert the integer to a string when it is enclosed in double quotes within a string literal.