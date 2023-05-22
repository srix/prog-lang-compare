Inheritance in Perl is a way to create a new class by extending an existing class. The new class will have all the attributes and methods of the parent class and can also add additional features or modify the behavior of the parent class.

To create a subclass in Perl, we use the `@ISA` array to specify the parent class. Here's an example:

```
package Person;

sub new {
    my $class = shift;
    my $self = {
        name => shift,
        age => shift,
    };
    bless $self, $class;
    return $self;
}

sub say_hello {
    my $self = shift;
    print "Hello, my name is $self->{name}\n";
}

package Employee;
our @ISA = qw(Person);

sub new {
    my $class = shift;
    my $self = $class->SUPER::new(@_);
    $self->{employer} = shift;
    bless $self, $class;
    return $self;
}

sub say_hello {
    my $self = shift;
    $self->SUPER::say_hello();
    print "I work for $self->{employer}\n";
}

my $person = Person->new("John", 30);
my $employee = Employee->new("Jane", 25, "Acme Inc");

$person->say_hello();    # Output: Hello, my name is John
$employee->say_hello();  # Output: Hello, my name is Jane
                         #         I work for Acme Inc
```

In this example, we define a parent class `Person` with a `new` constructor method to create a `Person` object with a name and age. We also define a `say_hello` method to print a greeting message.

Next, we define a subclass `Employee` that inherits from `Person` using the `@ISA` array. We also define a new `new` constructor method that calls the parent method to create a `Person` object and adds an `employer` attribute to the object.

Finally, we override the `say_hello` method in `Employee` to call the parent `say_hello` method and also print the employer information.

When we create `Person` and `Employee` objects and call the `say_hello` method, we can see how the subclass inherits and extends the behavior of the parent class.