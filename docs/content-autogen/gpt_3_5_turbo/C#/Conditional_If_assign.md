In C#, "if-else" statements are used to execute a code block based on a certain condition. Here's an example of using an "if" statement to check if a number is positive:

```
int num = 10; 

if(num > 0) 
{
    Console.WriteLine("The number is positive."); 
} 
```

In this example, the program checks if the integer variable "num" is greater than 0. If it is, then the message "The number is positive." is printed to the console.

You can also use "if-else if-else" statements to check for multiple conditions. Here's an example:

```
int num = 10; 

if(num > 0) 
{
    Console.WriteLine("The number is positive."); 
} 
else if(num < 0) 
{
    Console.WriteLine("The number is negative."); 
} 
else 
{
    Console.WriteLine("The number is zero."); 
} 
```

In this example, the program checks if "num" is greater than 0. If it is, then "The number is positive." is printed. If not, the program checks if "num" is less than 0. If it is, then "The number is negative." is printed. If "num" is neither greater than nor less than 0, then "The number is zero." is printed.

You can also use "if" statements to assign values to variables based on certain conditions. Here's an example:

```
int num = 10; 
string result = ""; 

if(num > 0) 
{
    result = "positive"; 
} 
else if(num < 0) 
{
    result = "negative"; 
} 
else 
{
    result = "zero"; 
} 

Console.WriteLine("The number is " + result + "."); 
```

In this example, the program sets the value of the "result" variable based on whether "num" is positive, negative, or zero. The program then prints the message "The number is [result]." to the console.