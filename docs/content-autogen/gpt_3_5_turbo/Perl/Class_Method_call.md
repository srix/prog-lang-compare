In Perl, you can call a method in a class by following these steps:

1. Create a class with a method:

```
package MyClass;

sub my_method {
   my $self = shift;
   my $param = shift;
   print "The parameter is $param\n";
}
```

2. Create an object of that class:

```
my $object = MyClass->new();
```

3. Call the method from the object:

```
$object->my_method("hello");
```

The output would be:
```
The parameter is hello
```

In this example, `new()` is a constructor method that creates an object of the `MyClass` class. The `my_method()` is a basic method that takes a parameter and prints it on the screen.

You can call the method by using the object operator `->`. You can pass parameters in the method parentheses in the similar way as you call a function in Perl.

I hope that helps! Let me know if you have any further questions.