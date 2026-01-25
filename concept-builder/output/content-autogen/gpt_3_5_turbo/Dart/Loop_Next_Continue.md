In Dart, next and continue keywords are used in loops to control the flow of the loop iteration. 

Next statement is used when we want to skip a particular value of the loop without terminating the loop. The continue statement can only be used inside loops.

Here is an example of using the next statement in a loop-

```
void main() {
  for (int i = 0; i < 6; i++) {
    if (i == 3) {
      continue;   //skip the rest when i=3
    }
    print("Value of i: $i");
  }
}

/* Output:
Value of i: 0
Value of i: 1
Value of i: 2
Value of i: 4
Value of i: 5
*/
```

In the above example, the loop will print all values of `i` except when `i` is 3, due to the use of `continue` statement.

Next, let's look at the `continue` statement in a loop. 

Here is an example of using the continue statement in a while loop.

```
void main() {
  int i = 0;
  while (i < 6) {
    i++;
    if (i == 3) {
      continue;   //skip i=3 and continue the loop
    }
    print("Value of i: $i");
  }
}

/* Output:
Value of i: 1
Value of i: 2
Value of i: 4
Value of i: 5
Value of i: 6
*/
```

In the above example, the loop will print all values of `i` except when `i` is 3, due to the use of `continue` statement.

So, both `next` and `continue` statement are helpful in controlling the flow of the loop iteration in Dart.