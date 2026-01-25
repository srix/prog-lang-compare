In Java, we can convert an integer to a float by simply appending a decimal point and zero (0) to the end of the integer value. This operation is commonly known as "type casting". Here's an example of converting the integer value 20 to a float value:

```java
int intValue = 20;
float floatValue = (float) intValue; // type casting
System.out.println("Converted float value: " + floatValue);
```

Output of this code will be:

```
Converted float value: 20.0
```

Here, we used the `(float)` operator to cast the integer value to a float value. Alternatively, we could also use the `Float.valueOf()` method to convert the integer value to a float value:

```java
int intValue = 20;
float floatValue = Float.valueOf(intValue);
System.out.println("Converted float value: " + floatValue);
```

The output of this code will be the same as previous one.