In Groovy, the `next` and `continue` keywords are used for skipping the current iteration in a loop.

The `next` keyword is used when you want to skip the current iteration and move to the next one in a loop.

Example:

```
for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        next
    }
    println(i)
}
```

Output:

```
1
2
3
4
6
7
8
9
10
```

In this example, when the value of `i` becomes 5, the `next` keyword is used to skip the current iteration and move to the next one. So, the value 5 is not printed in the output.

The `continue` keyword is similar to the `next` keyword. It is also used to skip the current iteration and move to the next one. However, the difference is that the `continue` keyword proceeds to the next iteration of the loop without executing the rest of the statements in the current iteration.

Example:

```
for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        continue
    }
    println(i)
}
```

Output:

```
1
2
3
4
6
7
8
9
10
```

In this example, when the value of `i` becomes 5, the `continue` keyword is used to skip the current iteration and move to the next one without executing the rest of the statements in the current iteration. So, the value 5 is not printed in the output.