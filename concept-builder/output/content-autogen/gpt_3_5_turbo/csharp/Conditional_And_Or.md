In C#, "and" and "or" are logical operators that allow you to combine multiple Boolean expressions. "And" combines these expressions in such a way that the resulting expression is true only if all the subexpressions are true. In contrast, "or" combines subexpressions in such a way that the resulting expression is true as long as at least one subexpression is true.

Here are some examples:

Using "and":

```
int x = 5;
int y = 7;
if (x < y && y < 10)
{
    Console.WriteLine("Both conditions are true.");
}
```

In this example, the "if" statement will only execute the code inside the curly braces if both conditions are true: x is less than y and y is less than 10.

Using "or":

```
int x = 5;
int y = 7;
if (x > 10 || y < 20)
{
    Console.WriteLine("At least one of the conditions is true.");
}
```

In this example, the "if" statement will execute the code inside the curly braces as long as at least one of the conditions is true: either x is greater than 10 or y is less than 20.