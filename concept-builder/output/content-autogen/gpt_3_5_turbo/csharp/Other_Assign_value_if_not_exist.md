In C#, you can assign a value to a variable only if it does not already exist using the null coalescing operator (??). This operator checks if a variable is null, and if it is, assigns a default value.

Here's an example:

```
int? number1 = null;
int number2 = number1 ?? 0;
```

In this example, we declare a nullable integer variable number1 and assign it the value null. We then create another integer variable number2 and assign it to number1 using the null coalescing operator (??). Since number1 is null, number2 will be assigned the default value of 0.

Another example:

```
string name1 = null;
string name2 = name1 ?? "John Doe";
```

In this example, we declare a string variable name1 and assign it the value null. We then create another string variable name2 and assign it to name1 using the null coalescing operator (??). Since name1 is null, name2 will be assigned the default value of "John Doe". 

You can also use the null coalescing operator to assign a value provided by a method or an object property, if the method or property returns a null value.

For example:

```
string name3 = null;
string name4 = name3 ?? GetName();
```

In this example, the method GetName() returns a string value. If name3 is null, name4 will be assigned the string value returned by GetName().