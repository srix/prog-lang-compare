In Perl, a class is defined using the `package` keyword followed by the name of the package. The usual convention is to use CamelCase notation for the package name.

To define a field in a class, we use the `my` keyword to declare a private variable inside the package. This variable is accessible only from within the package, and not from external code. Access to the field can be controlled using mutators and accessors.

Here's an example of a Perl class with a private field:

```
package Person;

sub new {
    my $class = shift;
    my $self = {
        _name => shift,
    };
    bless $self, $class;
    return $self;
}

sub getName {
    my $self = shift;
    return $self->{_name};
}

sub setName {
    my $self = shift;
    my $name = shift;
    $self->{_name} = $name;
}

1;
```

In this example, the `Person` class has a private field `_name`, which is initialized through the constructor method `new()`. Two additional methods `getName()` and `setName()` are provided to access and modify the field.

To create an instance of the `Person` class and use its methods, we can do the following:

```
my $person = Person->new("John");
print $person->getName(), "\n";  # Output: John

$person->setName("Jane");
print $person->getName(), "\n";  # Output: Jane
```

Here, we create a new `Person` instance with the name "John" and print the value of the `_name` field using the `getName()` method. We then change the name to "Jane" using the `setName()` method and print the value again.