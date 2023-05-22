In Perl, you can sort an array using the built-in `sort` function which sorts a list of values either alphabetically or numerically. 

Here is an example of how to sort an array named `@arr` in ascending order:

```
@arr = (4, 2, 1, 3, 5);
@sorted_arr = sort @arr;
print "@sorted_arr";
```

Output: `1 2 3 4 5`

You can also sort an array in descending order by reversing the sorted array using the `reverse` function:

```
@arr = (4, 2, 1, 3, 5);
@sorted_arr = reverse sort @arr;
print "@sorted_arr";
```

Output: `5 4 3 2 1`

You can also sort an array of strings alphabetically:

```
@arr = ("banana", "apple", "pear", "grape", "cherry");
@sorted_arr = sort @arr;
print "@sorted_arr";
```

Output: `apple banana cherry grape pear`

Finally, you can sort an array based on a custom criterion using the `sort` function with a custom sorting function as an argument. Here is an example of how to sort an array of hashes based on the value of a specific key in the hash:

```
@array_of_hashes = (
    {"name" => "John", "age" => 30, "salary" => 50000},
    {"name" => "Mary", "age" => 25, "salary" => 60000},
    {"name" => "Bob", "age" => 45, "salary" => 40000}
);

sub sort_by_salary {
    $array_of_hashes[$b]{"salary"} <=> $array_of_hashes[$a]{"salary"}
}

@sorted_array_of_hashes = sort sort_by_salary 0..$#array_of_hashes;
print Dumper(\@sorted_array_of_hashes);
```

Output:

```
$VAR1 = [
          {
            'name' => 'Mary',
            'salary' => 60000,
            'age' => 25
          },
          {
            'name' => 'John',
            'salary' => 50000,
            'age' => 30
          },
          {
            'name' => 'Bob',
            'salary' => 40000,
            'age' => 45
          }
        ];
```