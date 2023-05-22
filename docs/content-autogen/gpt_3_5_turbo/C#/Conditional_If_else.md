In C#, the if/else statement is used for decision-making where different actions are performed based on the specific conditions. Here is an example of how to use if/else in C#:

Example 1:

```
int num = 10;

if (num > 0)
{
    Console.WriteLine("The number is positive.");
}
else
{
    Console.WriteLine("The number is zero or negative.");
}
```

In this example, if the value of the variable `num` is greater than 0, the program will print "The number is positive." If the value of the variable `num` is zero or negative, the program will print "The number is zero or negative."

Example 2:

```
string username = "John";
string password = "password123";

if (username == "John" && password =="password123")
{
    Console.WriteLine("Login Successful.");
}
else
{
    Console.WriteLine("Invalid username or password.");
}
```

This example shows how to use if/else in a login system. If the `username` and `password` are correct, the program will print "Login Successful." Otherwise, it will print "Invalid username or password."

Example 3:

```
int score = 75;

if (score >= 90)
{
    Console.WriteLine("Grade: A");
}
else if (score >= 80)
{
    Console.WriteLine("Grade: B");
}
else if (score >= 70)
{
    Console.WriteLine("Grade: C");
}
else
{
    Console.WriteLine("Grade: Fail");
}
```

Here, the program checks the `score` of a student and prints the corresponding grade. If the score is 90 or above, the student gets an A; if between 80 and 90 (inclusive), they get a B; if between 70 and 80 (inclusive), they get a C. Otherwise, they fail.