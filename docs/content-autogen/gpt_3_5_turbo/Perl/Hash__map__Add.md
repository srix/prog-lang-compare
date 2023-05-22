In Perl, you can add an element to a hash by assigning a value to a new key, or an existing key. Here, I will demonstrate how to do this with examples:

Adding an element to a hash with a new key:

```perl
# create a new empty hash
my %my_hash = ();

# add an element with a new key
$my_hash{'key1'} = 'value1';

# print the hash to verify the new element
print %my_hash; # prints 'key1value1'
```

Adding an element to a hash with an existing key:

```perl
# create a hash with existing keys and values
my %my_hash = (
  'key1' => 'value1',
  'key2' => 'value2'
);

# add a new value to an existing key
$my_hash{'key1'} = 'new_value';

# print the hash to verify the updated value
print %my_hash; # prints 'key1new_valuekey2value2'
```

In both examples, we used the assignment operator `=` to add an element to a hash. When adding an element with a new key, we simply assigned a new value to the new key. When adding an element to an existing key, we assigned the new value to the existing key. Note that the `%` symbol is used to declare a hash variable in Perl.