In Java, the "until" keyword is not a language construct. It is not present in the Java syntax, and therefore, it cannot be used. However, Java has other constructs that perform the same function as "until." In Java, loops such as "while" and "do-while" are used to repeatedly execute a block of code until a condition becomes false. Here are examples of how to use while and do-while loops:

1. While loop:
A while loop executes a set of statements repeatedly until the specified condition becomes false. Here is the basic syntax of a while loop:

```
while (condition) {
  // statements to be executed repeatedly
}
```

Example:

```
int i = 0;
while (i < 5) {
  System.out.println("i = " + i);
  i++;
}
```
Output:
```
i = 0
i = 1
i = 2
i = 3
i = 4
```

2. Do-while loop:
A do-while loop is similar to the while loop, but the block of code in the loop body is executed at least once, even if the condition is initially false. The condition is checked at the end of the loop iteration. Here is the basic syntax of a do-while loop:

```
do {
  // statements to be executed repeatedly
} while (condition);
```

Example:

```
int i = 0;
do {
  System.out.println("i = " + i);
  i++;
} while (i < 5);
```
Output:
```
i = 0
i = 1
i = 2
i = 3
i = 4
```

In both loops, the code in the loop body will be executed until the condition is false, which is the equivalent of "until" in other programming languages.