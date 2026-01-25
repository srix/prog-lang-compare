In Perl, a constructor is a special method that is used to create objects from a class. Constructors are typically named `new` and are used to initialize the data members of the object. Here's an example of a simple class and its constructor:

```perl
package Person;

sub new {
    my $class = shift;
    my $self = {
        _firstName => shift,
        _lastName  => shift,
        _age       => shift,
    };
    bless $self, $class;
    return $self;
}
```

In this example, the `new` constructor takes three arguments: the first name, last name, and age of a person. It creates a new hashref object containing these values and blesses it with the class name, `Person`.

Once you have defined the constructor, you can create new objects by calling it on the class:

```perl
my $person = Person->new("John", "Doe", 42);
```

Here, we have created a new `Person` object with the first name "John", last name "Doe", and age 42.

You can also add additional methods to your class that use the object's data members:

```perl
package Person;

sub new {
    # ...

sub fullName {
    my ($self) = @_;
    return $self->{_firstName} . " " . $self->{_lastName};
}

sub greeting {
    my ($self) = @_;
    print "Hello, my name is " . $self->fullName() . " and I am " . $self->{_age} . " years old.\n";
}
```

Here, we have added two methods to our `Person` class: `fullName()` and `greeting()`. The `fullName()` method returns the full name of the person by concatenating the first and last names. The `greeting()` method prints a greeting containing the person's name and age.

We can call these methods on our `Person` object:

```perl
my $person = Person->new("John", "Doe", 42);
print $person->fullName() . "\n";  # "John Doe"
$person->greeting();               # "Hello, my name is John Doe and I am 42 years old."
```

In summary, constructors are used to create objects from a class, and they typically initialize the object's data members. You can then create additional methods on your class that use these data members to perform various operations.