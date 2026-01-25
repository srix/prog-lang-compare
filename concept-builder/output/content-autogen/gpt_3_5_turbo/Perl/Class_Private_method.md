In Perl, private methods are usually denoted with a leading underscore (_). These methods are only accessible within the class and cannot be called from outside. 

Here is an example of a Perl class with a private method:

```
package MyClass;

sub new {
  my $class = shift;
  my $self = {};
  bless $self, $class;
  return $self;
}

sub public_method {
  my $self = shift;
  $self->_private_method();
  print "This is a public method\n";
}

sub _private_method {
  my $self = shift;
  print "This is a private method\n";
}
```

In the above example, `_private_method` is a private method because of the leading underscore. It can only be called within the `MyClass` class. 

The `public_method` method calls `_private_method` within the class and prints "This is a public method" to the console. 

To use this class, you can create a new object of `MyClass` and call the `public_method`:

```
my $object = MyClass->new();
$object->public_method();
```

This will output:

```
This is a private method
This is a public method
```

As you can see, the private `_private_method` was called within the `public_method` and printed to the console along with the public method. But if you try to call `_private_method` directly, you will get an error:

```
$object->_private_method();
```

This will result in an "Undefined subroutine" error because `_private_method` is not accessible from outside the class.