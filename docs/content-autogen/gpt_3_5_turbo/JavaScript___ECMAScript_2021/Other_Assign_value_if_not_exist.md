In JavaScript, you can check if a value exists or not using different methods like `if else`, `switch`, `ternary operator`, etc. Once you have determined that the value does not exist, you can assign a default value to avoid errors while performing any operations on that value.

In ECMAScript 2021, you can use the `??` nullish coalescing operator to assign a default value when the value is nullish (either null or undefined). Here is an example:

```
let value;

value = value ?? 'default value';

console.log(value); // Output: default value
```

In the above example, we have defined a variable `value` that does not have any assigned value. Next, we have used the nullish coalescing operator to assign a default value `default value` to the `value` variable if it is nullish. The output will be `default value` as there was no previously assigned value to the variable.

Another example code:

```
let value = null;

value = value ?? 'default value';

console.log(value); // Output: default value
```

This code assigns a default value to `value` when it is nullish. Using the `??` operator avoids errors when trying to perform operations on nullish values.