In Objective-C, you can get the square root of a number using the sqrt() function from the math library.

Here's an example:

```objective-c
#import <math.h>

int main() {
    double number = 25.0;
    double result = sqrt(number);
    NSLog(@"The square root of %f is %f", number, result);
    return 0;
}
```

The output will be:

```
The square root of 25.000000 is 5.000000
```

In this example, we include the math.h header file to access the sqrt() function. We then declare a variable 'number' and assign it the value of 25.0, which is the number we want to find the square root of.

The sqrt() function is then used to calculate the square root of the 'number' variable, and the result is stored in the 'result' variable.

Finally, we use the NSLog() function to output the result to the console.