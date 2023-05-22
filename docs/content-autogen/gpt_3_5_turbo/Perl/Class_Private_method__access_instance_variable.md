In Perl, instance variables can be accessed within private methods using the "my" keyword to create a lexical variable that holds the value of the instance variable. Private methods are those methods that are not intended to be accessed outside the class and are defined using the "my" keyword followed by the method name.

Here is an example code for accessing an instance variable within a private method:

```
package MyClass;

sub new {
    my $class = shift;
    my $self = {
        _private_var => shift,
    };
    bless $self, $class;
    return $self;
}

sub my_private_method {
    my ($self, $param) = @_;
    my $private_var_value = $self->{_private_var};
    # Do something with the instance variable
}

1;
```

In this example, we have defined a class named "MyClass" with a private instance variable "_private_var". We have also defined a private method "my_private_method" that takes a parameter and accesses the value of "_private_var" using the "my" keyword to create a lexical variable "$private_var_value".

To access this method, we first need to create an object of the class using the "new" method:

```
my $obj = MyClass->new('some_value');
```

We can then call the private method on this object:

```
$obj->my_private_method('some_param');
```

This way we can access an instance variable in a private method in Perl.