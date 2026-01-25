In Perl, you can define a class using the `package` keyword, followed by the name of the package/class. You can then define attributes and methods within the class.

To implement `getters` and `setters` for the attributes, you can use the `get` and `set` methods respectively. These methods allow you to access and modify the values of the attributes from within the class and from outside of the class.

Here is an example class in Perl that demonstrates the use of `getters` and `setters`:

```
package Person;

sub new {
    my $class = shift;
    my $self = {
        _firstName => shift,
        _lastName => shift,
        _age => shift,
    };
    bless $self, $class;
    return $self;
}

sub getFirstName {
    my $self = shift;
    return $self->{_firstName};
}

sub setFirstName {
    my ($self, $firstName) = @_;
    $self->{_firstName} = $firstName if defined($firstName);
    return $self->{_firstName};
}

sub getLastName {
    my $self = shift;
    return $self->{_lastName};
}

sub setLastName {
    my ($self, $lastName) = @_;
    $self->{_lastName} = $lastName if defined($lastName);
    return $self->{_lastName};
}

sub getAge {
    my $self = shift;
    return $self->{_age};
}

sub setAge {
    my ($self, $age) = @_;
    $self->{_age} = $age if defined($age);
    return $self->{_age};
}

1;
```

In the example above, we define a class `Person` with attributes `_firstName`, `_lastName`, and `_age`. We define `getters` and `setters` for each attribute.

To create an instance of the `Person` class and access its attributes, we can do the following:

```
use Person;

my $person = new Person("John", "Doe", 30);

# Using getters to access attributes
print "First Name: ", $person->getFirstName(), "\n";
print "Last Name: ", $person->getLastName(), "\n";
print "Age: ", $person->getAge(), "\n";

# Using setters to modify attributes
$person->setFirstName("Jane");
$person->setLastName("Smith");
$person->setAge(25);

# Using getters to access modified attributes
print "First Name: ", $person->getFirstName(), "\n";
print "Last Name: ", $person->getLastName(), "\n";
print "Age: ", $person->getAge(), "\n";
```

In this example, we create a new instance of the `Person` class with the first name "John", last name "Doe", and age 30. We use the `getters` to display the values of the attributes.

Next, we use the `setters` to modify the values of the attributes. We then use the `getters` again to display the modified attributes.

This is just one example of how to use `getters` and `setters` in Perl. The implementation may vary depending on the particular needs of your class.