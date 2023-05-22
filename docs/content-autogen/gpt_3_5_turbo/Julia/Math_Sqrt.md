To get the square root of a number in Julia, you need to use the `sqrt()` function.

Here's an example:

```
number = 25
sqrt(number)
```

The output would be:

```
5.0
```

Note that Julia returns a floating-point value even if the input is an integer.

You can also calculate the square root of an array of numbers using the same function:

```
array = [16, 25, 36, 49]
sqrt.(array)
```

The output would be:

```
4.0, 5.0, 6.0, 7.0
```

The `.` after `sqrt` is known as the broadcasting operator. It applies the function to each element of the array.