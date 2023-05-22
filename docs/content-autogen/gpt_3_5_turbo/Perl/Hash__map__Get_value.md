In Perl, to get the value of a key in a hash, you can use the hash key as an index. Here is an example:

```
# Declare a hash and add some key-value pairs
my %person = (
    "name" => "John Smith",
    "age" => 30,
    "occupation" => "Teacher"
);

# Get the value of a key
my $person_name = $person{"name"};
print $person_name; # Output: John Smith
```

In the above example, the `%person` hash has three key-value pairs: `name`, `age`, and `occupation`. To get the value associated with the `name` key, we use `$person{"name"}` as an index. This returns the value `"John Smith"`, which we store in the `$person_name` variable. Finally, we print the value of `$person_name` using the `print` function. 

You can also loop through all the keys in a hash and get the values. Here is an example:

```
# Loop through all keys and print values
foreach my $key (keys %person) {
    my $value = $person{$key};
    print "$key: $value\n";
}

# Output:
# name: John Smith
# age: 30
# occupation: Teacher
```

In this example, we use the `foreach` loop to iterate through all the keys in the `%person` hash. For each key, we retrieve the corresponding value using `$person{$key}`, and store it in the `$value` variable. Finally, we print both the key and value using the `print` function. This results in output listing all key-value pairs in the `%person` hash.