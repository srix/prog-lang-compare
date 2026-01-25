To convert an integer to a float in Objective-C, you can simply cast the integer variable to a float type. Here is an example:

```objective-c
// declaring an integer variable
int myInt = 5;

// converting the integer to a float
float myFloat = (float)myInt;

// printing the result
NSLog(@"The integer %d has been converted to the float %f", myInt, myFloat);
```

This will output: `The integer 5 has been converted to the float 5.000000`.

Another way to convert an integer to a float is by using the `NSNumber` class, like this:

```objective-c
// declaring an integer variable
int myInt = 10;

// converting the integer to a float using NSNumber
NSNumber *myNumber = [NSNumber numberWithInt:myInt];
float myFloat = [myNumber floatValue];

// printing the result
NSLog(@"The integer %d has been converted to the float %f", myInt, myFloat);
```

This will output: `The integer 10 has been converted to the float 10.000000`.