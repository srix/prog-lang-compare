In Dart, you can use the conditional operator `?` : `:` to assign values based on a condition. This is often referred to as the ternary operator. 

The syntax for the ternary operator is:

```
condition ? expression1 : expression2;
```

If `condition` is true, `expression1` is executed and assigned to the variable. If `condition` is false, `expression2` is executed and assigned to the variable. 

Here's an example: 

```
bool isTrue = true;

String value = isTrue ? 'This' : 'That';

print(value); // output: This
```

In this example, the `isTrue` variable is set to `true`. When we use the ternary operator to assign a value to the `value` variable, it checks if `isTrue` is true. Since it is, it assigns the string 'This' to the `value` variable. 

Let's take a look at another example: 

```
bool isTrue = false;

String value = isTrue ? 'This' : 'That';

print(value); // output: That
```

In this example, `isTrue` is set to `false`. When we use the ternary operator to assign a value to the `value` variable, it checks if `isTrue` is true. Since it is not, it assigns the string 'That' to the `value` variable. 

I hope this helps you understand how to use the ternary operator to assign values in Dart!