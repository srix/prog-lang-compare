In Perl, a class can be declared using the package keyword. Here's an example of a simple class declaration:

```
package Person;

sub new {
    my $class = shift;
    my $self = {
        name => shift,
        age  => shift,
    };
    bless $self, $class;
    return $self;
}

sub printInfo {
    my( $self ) = @_;
    print "Name: $self->{name}\n";
    print "Age: $self->{age}\n";
}

1;
```

In this example, we have created a class called `Person`. The `new` method is a constructor that creates a new object of the class and initializes its properties. The `bless` keyword is used to associate the object with the class.

The `printInfo` method simply prints the information about the person. When we create an object of the `Person` class and call the `printInfo` method on it, it will print the name and age of the person.

Here's an example of how to use this class:

```
use Person;

my $person = Person->new("John Doe", 30);

$person->printInfo();
```

This will create a new object of the `Person` class with the name "John Doe" and age 30. The `printInfo` method is then called on this object, which will print its information.