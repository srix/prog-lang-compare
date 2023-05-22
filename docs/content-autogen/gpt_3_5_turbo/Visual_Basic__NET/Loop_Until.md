In Visual Basic .NET, the `Until` keyword is used to create a loop that will continue executing statements until a particular condition is met. The syntax for using the `Until` keyword is:

```
Do Until condition
' statements
Loop
```

Here, the code inside the loop will execute repeatedly until the `condition` is true.

Here is an example that uses the `Until` keyword to print a list of numbers from 1 to 10:

```
Dim i As Integer = 1

Do Until i > 10
    Console.WriteLine(i)
    i += 1
Loop
```

In this example, the loop will keep executing until the value of `i` is greater than 10. The loop executes the `Console.WriteLine(i)` statement, which prints out the current value of `i`, and then increments the value of `i`.

Another example that uses the `Until` keyword is to read input from the user until they enter a specific value:

```
Dim input As String = ""

Do Until input = "quit"
    Console.WriteLine("Enter some input (or 'quit' to quit): ")
    input = Console.ReadLine()
Loop
```

In this example, the loop keeps executing until the user types in "quit". The loop prompts the user to enter some input, reads their input using `Console.ReadLine()`, and sets `input` to the value entered by the user. The loop then checks if `input` is equal to "quit" and if it is, the loop ends and the program exits.