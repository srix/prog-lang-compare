In C++, boolean is a data type that can have two possible values: true or false. 

Here's an example of how to declare and assign a boolean variable in C++:

```c++
bool isStudent = true;
```

Here's an example of how to use boolean expressions in C++:

```c++
int num1 = 5;
int num2 = 10;
bool isLarger = num1 > num2;
bool isEqual = num1 == num2;

cout << "Is num1 larger than num2? " << isLarger << endl; // prints "Is num1 larger than num2? 0" (false)
cout << "Are num1 and num2 equal? " << isEqual << endl; // prints "Are num1 and num2 equal? 0" (false)
```

In the example above, we declare and assign two integer variables `num1` and `num2`. We then use boolean expressions to determine if `num1` is greater than `num2` (`isLarger`) and if `num1` is equal to `num2` (`isEqual`).

We then use `cout` to print out the values of `isLarger` and `isEqual`. Since neither of these boolean expressions were true (because `num1` is not greater than `num2` nor equal to `num2`), we get the value of 0 (false) when printing out these variables using the `<<` operator.