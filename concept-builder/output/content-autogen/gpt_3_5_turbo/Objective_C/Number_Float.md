In Objective-C, a floating-point number is represented by the 'float' or 'double' data types. 

The 'float' data type is a 32-bit floating-point number, while the 'double' data type is 64-bit. Float numbers are used when we need to store decimal values.

Here's an example of declaring and using a float variable in Objective-C:

```
float myFloat = 3.14; //declare float variable and assign value
NSLog(@"The value of my float is: %f", myFloat); //print value of float variable
```

Output: The value of my float is: 3.140000

Similarly, we can declare and use a double variable like this:

```
double myDouble = 1234567.89; //declare double variable and assign value
NSLog(@"The value of my double is: %f", myDouble); //print value of double variable
```

Output: The value of my double is: 1234567.890000

One important thing to note is that when printing float and double values using NSLog, we use the "%f" format specifier. This is because float and double values are both stored in binary format which has a limited precision, so we need to use the correct format specifier to get the expected output.