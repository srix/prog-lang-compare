Mixins in MATLAB programming are templates that contain pre-written code that can be easily included and shared across different classes. They're used to reduce code duplication and make programming more efficient.

To use mixins in MATLAB, the following steps can be followed:

1. Create the mixin file: Define the code that will be used across different classes in a separate file. For example, you can create a file called `mymixin.m` with the following code:

```
classdef mymixin
  methods
    function greet(obj)
        fprintf('Hello, my name is %s.\n', obj.name);
    end
  end
end
```

2. Create the main class that will use the mixin: All classes that need the functionality of the mixin will extend this class. For example, create a `Person` class in a file called `person.m`:

```
classdef Person < mymixin
  properties
    name
  end
end
```

3. Use the mixin function within the main class: This allows the main class `Person` to access the properties and methods defined in the mixin file. For example, `Person` can now use `greet()` function from mixin as follows:

```
p = Person();
p.name = 'John Doe';
p.greet(); % displays 'Hello, my name is John Doe.'
```

In this example, `Person` class inherits code from `mymixin` class and uses the `greet()` method to print out a greeting message including the `name` property.

Mixins are a powerful tool in MATLAB programming that enable the reuse of code across multiple classes, resulting in more efficient and maintainable code.