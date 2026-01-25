Ternary operator is a shorthand way of writing if/else statements in Objective-C. It has the form:

(condition) ? (value if true) : (value if false);

Here's an example: 

```objective-c
int num = 5;
NSString *result = (num == 5) ? @"Number is 5" : @"Number is not 5";
NSLog(@"%@", result);
```

Output: `Number is 5`

In this example, the ternary operator checks if the value of variable `num` is equal to 5. If it is, then the string "Number is 5" is assigned to `result`, otherwise "Number is not 5" is assigned to `result`.

Another example, using the ternary operator to determine whether a certain person can vote or not based on their age:

```objective-c
int age = 18;
NSString *result = (age >= 18) ? @"This person can vote" : @"This person cannot vote";
NSLog(@"%@", result);
```

Output: `This person can vote`

In this example, the ternary operator checks if the value of variable `age` is greater or equal to 18. If it is, then the string "This person can vote" is assigned to `result`, otherwise "This person cannot vote" is assigned to `result`.