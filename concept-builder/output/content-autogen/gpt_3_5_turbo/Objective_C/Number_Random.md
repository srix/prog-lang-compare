In Objective-C, you can generate random numbers using the `arc4random_uniform()` function. Here is an example:

```objective-c
// Generate a random number between 0 and 9
int randomNumber = arc4random_uniform(10);
NSLog(@"Random Number: %d", randomNumber);
```

This code uses `arc4random_uniform()` to generate a random integer between 0 and 9 and then prints it using `NSLog()`.

You can also generate a random number within a specific range by using the `arc4random_uniform()` function along with some simple arithmetic. Here is an example:

```objective-c
// Generate a random number between 10 and 20
int randomNumber = arc4random_uniform(11) + 10;
NSLog(@"Random Number: %d", randomNumber);
```

This code generates a random integer between 0 and 10 and adds 10 to it to get a random number between 10 and 20.