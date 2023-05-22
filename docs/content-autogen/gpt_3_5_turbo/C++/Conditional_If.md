The if statement in C++ is used for conditional programming. It is used to test a variable or expression and executes a block of code based on the result of the test.

Here is the basic syntax of if statement in C++:
```
if(condition){
  //code to execute if condition is true
}
```
Here, the condition could be either true or false. If the condition is true, the code inside the curly braces will be executed. If the condition is false, the code inside the curly braces will be skipped.

For example, let's say we have a variable x and we want to check if it is greater than 10. We can use the if statement as follows:
```
int x = 15;
if(x > 10){
  cout << "x is greater than 10";
}
```
Here, the condition `x > 10` is true since the value of x is 15. Therefore, the code inside the if statement will be executed and "x is greater than 10" will be printed to the console.

We can also use the else statement along with the if statement to execute a different block of code if the condition is false. Here is the syntax of the if-else statement in C++:
```
if(condition){
  //code to execute if condition is true
}
else{
  //code to execute if condition is false
}
```
For example, let's say we have two variables x and y, and we want to print the larger of the two. We can use the if-else statement as follows:
```
int x = 10, y = 20;
if(x > y){
  cout << "x is greater than y";
}
else{
  cout << "y is greater than x";
}
```
Here, the condition `x > y` is false since the value of x is less than y. Therefore, the code inside the else block will be executed and "y is greater than x" will be printed to the console.