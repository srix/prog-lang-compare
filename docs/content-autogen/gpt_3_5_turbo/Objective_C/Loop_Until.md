In Objective-C, `until` is not a keyword on its own. However, it can be used as part of an `if` statement with the `while` condition. Here's an example:

```
int count = 0;
do {
    count++;
    NSLog(@"Count is now %d", count);
} while (count < 5);
```

This will output:

```
Count is now 1
Count is now 2
Count is now 3
Count is now 4
Count is now 5
```

The `do-while` loop will execute the statement(s) inside the block at least once, and will continue to loop while the condition inside the `while` clause is true.

So in this example, the loop will execute until `count` is no longer less than 5. The `until` condition is effectively the same as saying "while the condition is not true."