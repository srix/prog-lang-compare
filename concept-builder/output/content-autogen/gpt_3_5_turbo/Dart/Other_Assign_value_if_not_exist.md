In Dart, you can assign a value to a variable only if it does not already have a value using the null-aware assignment operator `??=`. The syntax of the null-aware assignment operator is `variableName ??= valueToAssignIfNull`.

Here's an example:

```
void main() {
  int a;
  a ??= 10; // if a is null, assign 10 to it
  print(a); // Output: 10

  int b = 20;
  b ??= 30; // if b is not null, it will retain its value (20)
  print(b); // Output: 20
}
```

In the above example, we declared two variables `a` and `b`. We assigned `null` to `a` and `20` to `b`. We then used the null-aware assignment operator `??=` to assign 10 to `a` if it was null, and `30` to `b` if it was null. Since `a` was null, it got assigned the value 10, and `b` was not null, so it retained its value of 20.

This is a handy operator when you want to assign a default value to a variable that may or may not have been initialized.