To convert an integer to a float in C++, you can simply cast the integer variable to a float type. Here's an example:

```
int myInt = 7;
float myFloat = (float) myInt;
```

In this example, we're assigning the value of the integer variable `myInt` to the float variable `myFloat`. To do this, we're casting the value of `myInt` to a float using the `(float)` syntax.

Another way of casting an integer to a float is shown below:

```
int myInt = 7;
float myFloat = static_cast<float>(myInt);
```

In this example, we're using the `static_cast` keyword to cast `myInt` to a float.

Both of these methods will result in `myFloat` having a value of 7.0.