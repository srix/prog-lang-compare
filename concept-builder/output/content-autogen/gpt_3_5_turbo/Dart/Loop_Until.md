In Dart, the `until` loop is a loop control statement that executes a block of code repeatedly until a given condition becomes true. This loop is similar to the `while` loop, but the difference is that the block of code is executed before checking the condition.

The syntax for the `until` loop is:

```
do {
  // block of code to be executed
} until (condition);
```

Here is an example of using the `until` loop to print numbers from 1 to 5:

```
void main() {
  int i = 1;
  do {
    print(i);
    i++;
  } until (i > 5);
}
```

This will output the following:

```
1
2
3
4
5
```

Note that the `do` loop is executed at least once before checking the condition `i > 5`. Once `i` becomes greater than 5, the loop terminates.