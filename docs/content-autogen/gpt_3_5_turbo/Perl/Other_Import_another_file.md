In Perl, to import another file or module, we use the `use` keyword followed by the name of the module or file to be imported. The module or file should be in the same directory as the current script or included in the Perl library path.

Here is an example of how to import a file called "person.pm" containing a Person module:

```perl
# importing person.pm module
use Person;

# creating an instance of the Person class
my $person = Person->new("John", "Doe", 30);

# calling a method on the object
$person->greet();
```

In the above example, we use the `use` keyword to import the `Person` module defined in the "person.pm" file. We then create an instance of the `Person` class and call the `greet` method on the object.

Alternatively, we can use the `require` statement to import a file or module at runtime. Here is an example:

```perl
# importing the important_module.pm module at runtime
require 'important_module.pm';

# calling a method from the important_module
important_function();
```

In the above example, we use the `require` statement to import the "important_module.pm" at runtime. We then call a function named `important_function()` defined in the imported module.