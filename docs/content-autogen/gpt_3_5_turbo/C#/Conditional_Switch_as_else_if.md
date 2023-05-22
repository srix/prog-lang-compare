In C#, the switch statement can be used as an alternative to nested if...else statements. It allows easy comparison of a variable and reduces the number of lines of code necessary for multiple conditions. Here's an example:

```
int num = 3;

switch (num)
{
    case 1:
        Console.WriteLine("Number is 1");
        break;
    case 2:
        Console.WriteLine("Number is 2");
        break;
    default:
        Console.WriteLine("Number is not 1 or 2");
        break;
}
```

In this example, the variable `num` is compared to different cases using the switch statement. If the value of `num` matches a case, the corresponding code block is executed. If none of the cases match, the default code block is run.

This is equivalent to the following if...else if...else statement:

```
if (num == 1)
{
    Console.WriteLine("Number is 1");
}
else if (num == 2)
{
    Console.WriteLine("Number is 2");
}
else
{
    Console.WriteLine("Number is not 1 or 2");
}
```

By using the switch statement, the code becomes more concise and easier to read.