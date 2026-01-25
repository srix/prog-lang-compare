In Perl, you can check if a class has a method using the "can" function. The "can" function checks if an object or class has a method named after the specified string value. If the method exists, it returns a reference to the sub that implements the method.

Here's an example of how to use "can" to check if a class has a method:

```perl
package MyClass;

sub new {
    my $class = shift;
    my $self = {};
    bless($self, $class);
    return $self;
}

sub foo {
    print "foo\n";
}

1;
```

In this example, the "MyClass" class has a method named "foo". To check if "MyClass" has a "foo" method, you can use the "can" function like this:

```perl
use strict;
use warnings;
use MyClass;

my $obj = MyClass->new();

if ($obj->can('foo')) {
    print "MyClass has a foo method.\n";
} else {
    print "MyClass does not have a foo method.\n";
}
```

This code creates an instance of MyClass and then checks if it has a "foo" method using the "can" function. Since MyClass does have a "foo" method, the script outputs "MyClass has a foo method."