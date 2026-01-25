In Dart, floating-point numbers are represented using either the `double` or `float` data types. 

The `double` data type is the default type used for floating-point numbers in Dart and is accurate up to 15 decimal digits. A `double` value is defined as follows:

```
double price = 12.99;
```

The `float` data type, on the other hand, is less accurate and is accurate only up to 6 decimal digits. To use the `float` type, you need to import the `dart:typed_data` library. A `float` value is defined as follows:

```
import 'dart:typed_data';

Float32 myFloat = 3.14159;
```

Here are some additional examples of using floating-point numbers in Dart:

```
double myDouble = 10.50;
int myInt = 5;

// Using a double variable in arithmetic expressions
print(myDouble + 3.5);
print(myDouble - 2.0);

// Converting a double to an integer
print(myDouble.toInt());

// Converting an integer to a double
print(myInt.toDouble());

// Using a float variable in arithmetic expressions
Float32 myFloat = 2.345;
print(myFloat + 5.0);
print(myFloat - 2.0);

// Converting a float to a double
print(myFloat.toDouble());
``` 

In the above examples, we show how to perform basic arithmetic operations on floating-point numbers, convert between data types, and perform type casting.