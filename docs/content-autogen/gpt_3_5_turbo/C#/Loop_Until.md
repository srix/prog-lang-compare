In C#, the "until" keyword is not a standalone keyword like "if" or "for". It is typically used in a do-while loop, which keeps executing the loop body until a certain condition becomes false. Here is the syntax of do-while loop with until keyword:

```
do {
    // loop body
}
while (condition is false);
```

Here is an example:

```
int num = 1;
do {
    Console.WriteLine(num);
    num++;
}
while(num <= 5);
```

In this example, a variable named "num" is declared and initialized with value 1. Then, the do-while loop is executed repeatedly until the condition "num <= 5" becomes false. Inside the loop body, the value of "num" is printed and then incremented by 1, so the output will be:

```
1
2
3
4
5
```

Another example can be:

```
int i = 0;
do {
    Console.WriteLine(i);
    i += 2; // increment i by 2 in each loop
}
while (i < 10);
```

This program will print even numbers from 0 to 8, because the loop will keep executing until i is less than 10.