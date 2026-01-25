In C++, if/else statements are used for conditional execution of code. 

The general format is:

```
if (condition) {
   // Code to execute if the condition is true
}
else {
   // Code to execute if the condition is false
}
```

Here is an example of an if/else statement:

```
int age = 18;

if (age >= 18) {
   std::cout << "You are an adult." << std::endl;
}
else {
   std::cout << "You are a minor." << std::endl;
}
```

In this example, the condition is `age >= 18`. If `age` is greater than or equal to 18, the code inside the if block will be executed, printing out "You are an adult". If `age` is less than 18, the code inside the else block will be executed, printing out "You are a minor".

Another example:

```
int number = 15;

if (number % 2 == 0) {
   std::cout << "The number is even." << std::endl;
}
else {
   std::cout << "The number is odd." << std::endl;
}
```

In this example, the condition is `number % 2 == 0`. If `number` is divisible by 2 with no remainder, the code inside the if block will be executed, printing out "The number is even". Otherwise, the code inside the else block will be executed, printing out "The number is odd".