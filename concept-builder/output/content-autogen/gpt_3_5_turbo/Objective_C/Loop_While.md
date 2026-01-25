The while loop in Objective-C is used to execute a block of code repeatedly as long as a specified condition is true. The syntax for a while loop in Objective-C is as follows:

```
while (condition) {
    // code to execute repeatedly
}
```

Here, the condition is tested before each iteration of the loop. If the condition is true, the code inside the loop is executed. If the condition is false, the code inside the loop is skipped, and the program continues executing the code that follows the while loop.

For example, let's say we want to print the numbers from 1 to 10 using a while loop. We can do it like this:

```
int i = 1;
while (i <= 10) {
    NSLog(@"%d", i);
    i++;
}
```

In this example, we start with the value of i equal to 1. The while loop condition checks if i is less than or equal to 10. If it is true, then the loop runs and prints the value of i, and then increments i by 1. The loop continues running until i becomes greater than 10, at which point the condition becomes false, and the loop exits.

Another example would be to read user input using a while loop. Here is a code snippet to read a user's input until they enter the word "exit":

```
NSString *input = @"";
while (![input isEqualToString:@"exit"]) {
    NSLog(@"Enter a command (type 'exit' to quit):");
    scanf("%s", input);
    NSLog(@"You entered: %@", input);
}
```

In this example, the loop continues to prompt the user to enter a command until the input is equal to the string "exit". The program uses scanf() to read the user's input as a C-style string, then converts it to an Objective-C string using the @"" syntax and logs it to the console.

Overall, the while loop in Objective-C is a useful construct for executing code repeatedly based on a specified condition.