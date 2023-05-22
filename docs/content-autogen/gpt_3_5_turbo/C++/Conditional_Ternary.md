Ternary operator is a conditional operator that takes three operands. It is used to simplify the if-else conditions and to write a concise code. The syntax of the ternary operator is:

(condition) ? (true expression) : (false expression)

If the condition is true, the true expression is evaluated, otherwise, the false expression is evaluated. Here are a few examples to illustrate its use:

Example 1:

```
int a = 10, b = 20;
int max = (a > b) ? a : b;
```

In this example, the condition `a > b` is evaluated. Since it is false, the false expression `b` is evaluated and assigned to the variable `max`. Therefore, `max` will have the value 20.

Example 2:

```
int num;
cin >> num;
string result = (num % 2 == 0) ? "even" : "odd";
cout << result;
```

In this example, the condition `num % 2 == 0` is evaluated. If `num` is even, the true expression "even" is evaluated and assigned to the variable `result`. Otherwise, the false expression "odd" is evaluated and assigned to the `result`. The value of `result` is then printed.

Example 3:

```
int age;
cin >> age;
string status = (age >= 18) ? "eligible to vote" : "not eligible to vote";
cout << status;
```

In this example, the condition `age >= 18` is evaluated. If `age` is greater than or equal to 18, the true expression "eligible to vote" is evaluated and assigned to the variable `status`. Otherwise, the false expression "not eligible to vote" is evaluated and assigned to the `status`. The value of `status` is then printed.