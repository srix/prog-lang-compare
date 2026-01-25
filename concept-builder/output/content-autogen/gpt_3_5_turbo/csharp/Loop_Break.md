In C#, the break statement allows you to jump out of a loop or switch statement. Here are some examples:

1. Using break in a for loop:

```
for (int i = 0; i < 10; i++)
{
    if (i == 5)
        break;
    Console.WriteLine(i);
}
```

Output: 

```
0
1
2
3
4
```

In the above code, the loop will terminate once i reaches 5 because of the break statement.

2. Using break in a while loop:

```
int i = 0;
while (i < 10)
{
    if (i == 5)
        break;
    Console.WriteLine(i);
    i++;
}
```

Output:

```
0
1
2
3
4
```

Again, the loop will terminate when i equals 5 because of the break statement.

3. Using break in a switch statement:

```
int x = 2;
switch (x)
{
    case 1:
        Console.WriteLine("x is 1");
        break;
    case 2:
        Console.WriteLine("x is 2");
        break;
    default:
        Console.WriteLine("x is not 1 or 2");
        break;
}
```

Output:

```
x is 2
```

In the above code, the switch statement will execute the code block for case 2 and then terminate because of the break statement.