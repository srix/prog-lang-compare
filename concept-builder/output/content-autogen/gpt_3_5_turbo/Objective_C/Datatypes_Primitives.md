Primitive types in Objective-C are the basic data types used to declare variables in the program. There are six primitive data types in Objective-C: 

1. int: Used to store integer values (whole numbers). For example: 

```objc
int age = 29;
```

2. float: Used to store single-precision floating-point values (decimal numbers). For example: 

```objc
float price = 19.99;
```

3. double: Used to store double-precision floating-point values (decimal numbers with greater precision than `float`). For example: 

```objc
double pi = 3.14159;
```

4. char: Used to store a single character (represented by ASCII value). For example: 

```objc
char grade = 'A';
```

5. BOOL: Used to store a Boolean value (`YES` or `NO`). For example: 

```objc
BOOL isTall = YES;
```

6. void: Used to declare functions that do not return a value. For example: 

```objc
void greet() {
    printf("Hello World!\n");
}
```

These primitive types are used to declare variables, which allows you to store and manipulate data in your program. For example:

```objc
int num1 = 10;
int num2 = 20;
int sum = num1 + num2;

NSLog(@"%d + %d = %d", num1, num2, sum);
```

Output: `10 + 20 = 30`