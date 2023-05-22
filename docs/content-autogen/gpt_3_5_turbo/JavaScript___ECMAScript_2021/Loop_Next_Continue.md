In JavaScript - ECMAScript 2021, the `next` and `continue` statements are used within loops to control the execution flow. 

1. `next` statement:
The `next` statement is used to skip over one iteration of a loop. When the `next` statement is executed, the loop skips to the next iteration without executing any further statements in the current iteration. 

Example:

```
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
```

Output:
```
1
2
4
5
```

In this example, the loop runs from `1` to `5`. When `i` is equal to `3`, the `continue` statement skips over that iteration without executing `console.log(i)`.

2. `continue` statement:
The `continue` statement is used to skip a part of the current iteration and continue with the next iteration of the loop. 

Example:

```
let i = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    next;
  }
  console.log(i);
}
```

Output:
```
1
2
4
5
```

In this example, the loop runs while `i` is less than `5`. When `i` is equal to `3`, the `next` statement is executed, which skips the rest of the current iteration, including the `console.log(i)` statement. The loop then continues with the next iteration.