To define a static method in a class in Perl, you can use the `sub` keyword followed by the keyword `sub` itself with the class name and method name separated by double colons (`::`). A static method can be called on the class itself instead of an instance of the class.

Here's an example of defining a static method in a Perl class:

```
package MyPackage;

sub my_static_method {
    # ...method implementation...
}

1;
```

In the above example, the `my_static_method` is a static method defined in the `MyPackage` class.

You can call this static method as follows:

```
MyPackage::my_static_method();
```

Note that you don't need to create an object of the class to access the static method.