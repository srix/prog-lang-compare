In Dart, you can increment a number using the increment operator `++`. There are two types of increment operators: postfix and prefix.

1. Postfix increment operator `n++` - adds 1 after the variable value is used.

```
int n = 5;
print(n++); // Output: 5
print(n); // Output: 6
```

In the above example, the initial value of `n` is 5. When we print `n++`, it first prints the current value of `n` which is 5 and then increments `n` by 1. So, the value of `n` becomes 6 after the operation.

2. Prefix increment operator `++n` - adds 1 before the variable value is used.

```
int n = 5;
print(++n); // Output: 6
print(n); // Output: 6
```

In the above example, the initial value of `n` is 5. When we print `++n`, it first increments `n` by 1 and then prints the new value of `n` which is 6. So, the value of `n` remains 6 after the operation.