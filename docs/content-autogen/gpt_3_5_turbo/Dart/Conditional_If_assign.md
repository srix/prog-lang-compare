In Dart, the `if` statement can be used to assign values to variables based on a condition.

Here's an example:

```
int age = 18;
String status;

if(age >= 18){
  status = "adult";
} else{
  status = "minor";
}

print("Age: $age"); // prints Age: 18
print("Status: $status"); // prints Status: adult
```

In the example above, we declare a variable `age` and set it to `18`. We also declare a variable `status` but don’t assign any value to it.

We then use the `if` statement to check if `age` is greater than or equal to `18`. If the condition is true, then the value "adult" is assigned to `status`. Otherwise, the value "minor" is assigned to `status`.

Finally, we print out the values of `age` and `status`. Since `age` is equal to `18`, the output will be "Age: 18". Since `age` is greater than or equal to `18`, the output for `status` will be "Status: adult".

Another example with ternary operators:

```
int number = 5;

String result = (number > 0) ? "positive" : "negative";

print(result); // prints positive
```

In the example above, we declare a variable `number` and set it to `5`. We then declare a variable `result` and use the ternary operator to check if `number` is greater than zero. If `number` is greater than zero, then the value "positive" is assigned to `result`. Otherwise, the value "negative" is assigned to `result`.

Finally, we print out the value of `result`. Since `number` is greater than zero, the output will be "positive".