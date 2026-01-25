In Perl, an array can hold values of any scalar data type such as strings, integers, and even references. Here's an example of creating an array with different types:

```
# Declare an array with different types of values
my @mixed_array = (1, "two", 3.14, 'four');

# Accessing array elements
print $mixed_array[0];   # output: 1
print $mixed_array[1];   # output: two
print $mixed_array[2];   # output: 3.14
print $mixed_array[3];   # output: four
```

As you can see, we have created an array called `mixed_array` with different scalar values such as an integer (`1`), a string (`"two"`), a floating-point number (`3.14`), and a single-quoted string (`'four'`).

You can also create an array with references as values. Here's an example:

```
# Declare an array with references
my $scalar_ref = \10;   # Scalar reference pointing to an integer
my @ref_array = ( [1, 2, 3], { name => 'John', age => 35 }, $scalar_ref );

# Accessing array elements with references
print $ref_array[0][1];              # output: 2
print $ref_array[1]->{name};        # output: John
print ${ $ref_array[2] };           # output: 10
```

In this example, we have created an array `ref_array` with three scalar values, two of which are references. The first value is an array reference containing three integers, the second value is a hash reference containing key-value pairs, and the third value is a scalar reference pointing to an integer.

We can access these array elements using references and dereferencing them with the appropriate syntax.