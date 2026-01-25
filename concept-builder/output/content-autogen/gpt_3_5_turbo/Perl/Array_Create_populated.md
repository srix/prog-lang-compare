In Perl, an array is a variable that stores a list of scalar values. Here's how you can create an array in Perl:

1. Using the `@` sign to declare an empty array:

```
my @numbers = ();
```

2. Using the `@` sign to declare an array with values:

```
my @fruits = ("apple", "banana", "orange");
```

3. Using the `qw()` function to declare an array with values as an alternative to option 2:

```
my @fruits = qw(apple banana orange);
```

You can access array elements by using the index number in square brackets `[]`. Here are examples of accessing array elements:

```
print $fruits[0]; # prints "apple"
print $fruits[1]; # prints "banana"
print $fruits[2]; # prints "orange"
```

You can also add new elements to an array using the `push()` function, remove elements using the `splice()` function, sort elements using the `sort()` function and perform other array operations.