In Perl, we can set a default value for a function or method argument using the `=` symbol. This ensures that if the argument is not provided when calling the function, the default value is used instead. 

Here's an example:

```
sub greet {
  my ($name, $greeting) = @_;
  $greeting ||= "Hello";
  print "$greeting, $name!\n";
}

greet("John"); # prints "Hello, John!"
greet("Jane", "Hi"); # prints "Hi, Jane!"
```

In the above example, the `greet` function takes two arguments, `$name` and `$greeting`. The `||=` operator is used to set a default value for `$greeting` if it is not provided. So if the second argument is not provided, `$greeting` will be set to "Hello".

We can also set a default value directly in the function signature, like this:

```
sub greet {
  my ($name, $greeting) = @_;
  $greeting //= "Hello";
  print "$greeting, $name!\n";
}

greet("John"); # prints "Hello, John!"
greet("Jane", "Hi"); # prints "Hi, Jane!"
```

In this example, the `//=` operator is used to set a default value for `$greeting`. This has the same effect as the previous example.