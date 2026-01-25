In Objective-C, the `||` operator is known as "logical OR" or "OR" operator, and the `&&` operator is known as "logical AND" or "AND" operator. 

The `||` operator returns `YES` if at least one of the two operands is not equal to `0`. 

Here is an example that uses Logical OR operator:

```
BOOL result = YES;
if (result || 2+2 == 5) {
   NSLog(@"At least one condition is true");
}
else {
   NSLog(@"Both conditions are false");
}
```

The output of this code will be `At least one condition is true`.

The `&&` operator returns `YES` only if both operands are not equal to `0`. 

Here is an example that uses Logical AND operator:

```
BOOL result = YES;
if (result && 2+2 == 5) {
   NSLog(@"Both conditions are true");
}
else {
   NSLog(@"At least one condition is false");
}
```

The output of this code will be `At least one condition is false`.

In Objective-C, you can also use the `|` and `&` operators for bitwise OR and bitwise AND operations respectively. These operators work on the individual bits of the operands rather than treating them as boolean values. However, using these operators is less common in Objective-C programming compared to using the logical operators `||` and `&&`.