While loop is a popular loop in Python and can be used to execute a block of code repeatedly, until a specific condition is met.

Here's an example of a while loop in Python 3.10:

```
# Example 1: Printing numbers using while loop
i = 1
while i <= 5:
    print(i)
    i += 1
```

In this program, the while loop will run until the condition i <= 5 is False. The variable i starts at 1 and is incremented by 1 at each iteration until the condition becomes False. During each iteration, the value of i is printed to the console. The output of this program will be as follows:

```
1
2
3
4
5
```

Another example of a while loop in Python 3.10 is given below:

```
# Example 2: Continuously executing code until condition is met
user_input = None
while user_input != "stop":
    user_input = input("Enter a command (type stop to exit): ")
    print("You entered:", user_input)
```

Here, the user is prompted to enter a command. The while loop will continue to execute until the user enters the string "stop". During each iteration of the loop, the user_input value is printed to the console. The output of this program will be as follows:

```
Enter a command (type stop to exit): go
You entered: go
Enter a command (type stop to exit): run
You entered: run
Enter a command (type stop to exit): stop
You entered: stop
``` 

These are just two examples of how the while loop can be used in Python 3.10 to execute a block of code repeatedly until a specific condition is met.