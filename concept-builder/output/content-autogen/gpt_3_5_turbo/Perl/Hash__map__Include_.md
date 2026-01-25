In Perl, you can check if a hash includes a key by using the `exists` function. Here is an example:

```perl
my %hash = (
    name => "John",
    age => 30,
    occupation => "Teacher"
);

if (exists $hash{name}) {
    print "The hash includes the key 'name'\n";
}
else {
    print "The hash does not include the key 'name'\n";
}
```

In this example, the `exists` function checks if the key "name" exists in the `%hash` hash. If it does, the program will print "The hash includes the key 'name'". If it doesn't, the program will print "The hash does not include the key 'name'".

You can also use `exists` in combination with conditional operators to perform specific actions based on the existence of the key. For example:

```perl
my $occupation = exists($hash{occupation}) ? $hash{occupation} : "Undefined";
print "The occupation is $occupation\n";
```

In this example, the ternary operator is used to check if the key "occupation" exists in the `%hash` hash. If it does, the value associated with that key will be assigned to the `$occupation` variable. If it doesn't, the string "Undefined" will be assigned to the variable.