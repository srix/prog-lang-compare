To convert an integer to a string in Dart, we can use the `toString()` method. Here's an example:

```
int myNumber = 42;
String myString = myNumber.toString();
print(myString); // Output: "42"
```

In the above example, we first declare an integer variable `myNumber` with a value of `42`. Then, we use the `toString()` method on `myNumber` to convert it into a string and assign the result to a new string variable `myString`. Finally, we print the value of `myString`, which is `"42"`.

Here's another example:

```
int anotherNumber = 12345;
String anotherString = anotherNumber.toString();
print("The number is: $anotherString"); // Output: "The number is: 12345"
```

In this example, we declare an integer variable `anotherNumber` with a value of `12345`. We use the `toString()` method to convert it into a string and assign it to a new string variable `anotherString`. Finally, we use string interpolation to print out a message that includes the value of `anotherString`.