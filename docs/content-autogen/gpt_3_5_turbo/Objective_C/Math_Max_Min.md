In Objective-C, you can get the maximum or minimum of two numbers using the `MAX` and `MIN` macros which are defined in the `<NSObjCRuntime.h>` header. These macros will return the larger or smaller of two given values respectively.

Here are a couple of examples demonstrating their usage:

1. Getting the maximum of two integers:

```
int a = 5;
int b = 10;
int max = MAX(a, b);
NSLog(@"The maximum of %d and %d is: %d", a, b, max);
// Output: The maximum of 5 and 10 is: 10
```

2. Getting the minimum of two floats:

```
float x = 3.5;
float y = 2.7;
float min = MIN(x, y);
NSLog(@"The minimum of %.1f and %.1f is: %.1f", x, y, min);
// Output: The minimum of 3.5 and 2.7 is: 2.7
```

Note that the `MAX` and `MIN` macros can be applied to any comparable data type, including `CGFloat`, `double`, `NSInteger`, etc.