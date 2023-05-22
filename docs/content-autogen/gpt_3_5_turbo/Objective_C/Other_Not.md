In Objective-C, "not" is implemented using the exclamation mark (!) symbol. It is used to reverse the logical value of a boolean expression. Here is an example of how to use "not" in Objective-C:

```Objective-C
// Declare a boolean variable
BOOL isSunny = YES;

// Use "not" to reverse the logical value of the boolean variable
if (!isSunny) {
    NSLog(@"It's not sunny today.");
} else {
    NSLog(@"It's sunny today.");
}
```

In this example, the "not" symbol is used to reverse the logical value of the boolean variable "isSunny". If the value of "isSunny" is true (YES), then the message "It's sunny today." will be printed. If the value of "isSunny" is false (NO), then the message "It's not sunny today." will be printed.