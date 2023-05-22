In Perl, struct is a data structure that allows you to group multiple similar data types into a single unit. Here's an example of how to create and use a struct in Perl:

```
use strict;
use warnings;
use Data::Struct qw(:pack);

# Define the structure
struct Person => [
    'name'    => 'a20',
    'age'     => 's',
    'address' => 'a30',
];

# Create an instance of the structure
my $person = Person->new(
    name    => "John Doe",
    age     => 35,
    address => "123 Main St.",
);

# Access the fields of the structure
print "Name: " . $person->name . "\n";
print "Age: " . $person->age . "\n";
print "Address: " . $person->address . "\n";

# Modify the fields of the structure
$person->name("Jane Doe");
$person->address("456 Oak St.");

# Print the modified fields of the structure
print "New name: " . $person->name . "\n";
print "New address: " . $person->address . "\n";
```

In this example, we define a Person struct with three fields: name, age, and address. We then create an instance of the struct and populate it with data. We can access and modify the fields of the struct using the `->` operator. Finally, we print out the values of the fields before and after modification.

Note that we use the Data::Struct module to create and manipulate the struct. This module provides functions for packing and unpacking data, similar to the pack and unpack functions in C. We use the :pack option to import the packing functions into our Perl code.