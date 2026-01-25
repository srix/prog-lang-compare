In Objective-C, the if statement is used to execute a block of code based on a certain condition. Here's an example:

```objective-c
int num = 10;
if(num > 5){
   NSLog(@"Num is greater than 5");
}
```

In this example, the if statement is checking if the value of the variable `num` is greater than 5. If the condition is true, i.e. `num` is indeed greater than 5, the statement `NSLog(@"Num is greater than 5")` will be executed.

You can also use the if statement in conjunction with else to execute a different block of code if the condition is false. Here's an example:

```objective-c
int num = 4;
if(num > 5){
   NSLog(@"Num is greater than 5");
} else {
   NSLog(@"Num is less than or equal to 5");
}
```

In this example, the if statement is still checking if the value of the variable `num` is greater than 5. But if the condition is false, the statement `NSLog(@"Num is less than or equal to 5")` will be executed instead.

You can also use else if to test for multiple conditions. Here's an example:

```objective-c
int num = 3;

if(num > 5){
   NSLog(@"Num is greater than 5");
} else if(num > 3){
   NSLog(@"Num is between 3 and 5");
} else {
   NSLog(@"Num is less than or equal to 3");
}
```

In this example, there are three conditions being tested for. If `num` is greater than 5, the first block of code will be executed. If it's not, the second condition is tested: if `num` is greater than 3 but less than or equal to 5, the second block of code will be executed. If neither condition is true, the final else block of code will be executed. 

Note that with if statements in Objective-C (and most programming languages), you can test for many different conditions and execute different blocks of code based on the result.