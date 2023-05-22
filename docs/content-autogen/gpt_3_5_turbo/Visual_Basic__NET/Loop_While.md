In Visual Basic .NET, the while loop is used to execute a block of code repeatedly as long as a specified condition is true. 

The syntax for while loop is as follows:

```
While condition
    ' code to execute while condition is true
End While
```

Here's an example that demonstrates a while loop:

```
Dim i As Integer = 1
While i <= 5
    Console.WriteLine("Current value of i is " & i)
    i = i + 1  ' increment i
End While
```

Output:

```
Current value of i is 1
Current value of i is 2
Current value of i is 3
Current value of i is 4
Current value of i is 5
```

In the above example, the loop is executed as long as the condition `i <= 5` is true. During each iteration of the loop, the value of `i` is printed and then incremented by 1. Once the value of `i` becomes greater than 5, the loop is exited.

Here's another example that demonstrates the use of while loop with user input:

```
Dim userInput As String = String.Empty
While userInput <> "exit"
    Console.WriteLine("Enter a word. Type 'exit' to stop.")
    userInput = Console.ReadLine()
    Console.WriteLine("You entered: " & userInput)
End While
```

Output:

```
Enter a word. Type 'exit' to stop.
Apple
You entered: Apple
Enter a word. Type 'exit' to stop.
Banana
You entered: Banana
Enter a word. Type 'exit' to stop.
Pear
You entered: Pear
Enter a word. Type 'exit' to stop.
exit
You entered: exit
```

In the above example, the while loop is executed as long as the user does not enter "exit". During each iteration of the loop, the user is prompted to enter a word. The word is then printed on the console. Once the user enters "exit", the loop is exited.