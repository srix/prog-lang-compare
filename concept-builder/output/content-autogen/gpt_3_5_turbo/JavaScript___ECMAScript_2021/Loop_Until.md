The `until` statement is not a built-in statement in JavaScript. However, you can achieve similar functionality using a while loop together with a negated condition.

The syntax for a `while` loop is as follows:

```
while (condition) {
  statement(s)
}
```

Here, the code inside the `while` loop will continue to execute as long as the `condition` is true.

To use `until` in JavaScript, you can invert the `condition` and use a `while` loop. This results in the loop running until the negated condition becomes `false`.

Here's an example:

```
let num = 0;
until (num >= 3) {
  console.log(num);
  num++;
}
```

This code will result in a `ReferenceError` because `until` is not a valid statement in JavaScript.

Instead, we can invert the condition and use a `while` loop like this:

```
let num = 0;
while (!(num >= 3)) {
  console.log(num);
  num++;
}
```

Here, the loop will run until `num` is greater than or equal to `3`. The output of this code will be:

```
0
1
2
```

Note that this is functionally equivalent to a `do-while` loop with the condition inside the `while` clause:

```
let num = 0;
do {
  console.log(num);
  num++;
} while (num < 3);
```

This will produce the same output as the previous example:

```
0
1
2
```