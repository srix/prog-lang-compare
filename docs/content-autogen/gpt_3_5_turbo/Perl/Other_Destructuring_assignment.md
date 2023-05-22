Destructuring assignment in Perl can be performed using the list assignment operator `=()=` combined with the array or hash reference declaration operator `@{}` or `%{}`.

Here's an example of destructuring assignment of an array:

```
my @numbers = (2, 4, 6);
my ($first, $second, $third) = @numbers;

print "$first, $second, $third"; # Output: 2, 4, 6
```

In this example, the array `@numbers` is deconstructed into three separate variables `$first`, `$second`, and `$third`, each containing one value from the original array.

Similarly, here's an example of destructuring assignment of a hash:

```
my %person = (
    name => 'John',
    age => 25,
    gender => 'Male'
);
my ($name, $age, $gender) = values %person;

print "$name is a $gender aged $age"; # Output: John is a Male aged 25
```

In this example, the hash `%person` is similarly deconstructed into three separate variables `$name`, `$age`, and `$gender`, each containing one value from the original hash.

It's important to note that destructuring assignment only works with arrays and hashes that have fixed sizes and ordered keys. When working with arrays and hashes with variable sizes, you may need to use techniques such as slicing and control structures to extract the values you need.