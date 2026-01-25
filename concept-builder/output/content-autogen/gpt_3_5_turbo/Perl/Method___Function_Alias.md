In Perl, an alias is a nickname for a variable. Using an alias can be helpful when two or more variables need to be equivalent or interchangeable within a program. An example of how to use aliases in Perl may look like this:

```perl
# Define a variable and an alias
my $var1 = "Hello, world!";
my $alias = \$var1;

# Print the value of $var1 through the alias
print $$alias, "\n"; # Output: Hello, world!

# Change the value of $var1 through the alias
$$alias = "Goodbye, cruel world!";
print $var1, "\n"; # Output: Goodbye, cruel world!
```

In the example above, the `$alias` variable is assigned to a reference to `$var1`, meaning that it points to the same location in memory as `$var1`. By using the `$$` notation, the value of `$var1` can be accessed and modified through the `$alias`. 

Alternatively, the same can be achieved using the `\` operator, as shown in the next example:

```perl
# Define a variable and an alias
my $var1 = "Hello, world!";
my $alias = \$var1;

# Print the value of $var1 through the alias
print ${$alias}, "\n"; # Output: Hello, world!

# Change the value of $var1 through the alias
${$alias} = "Goodbye, cruel world!";
print $var1, "\n"; # Output: Goodbye, cruel world!
```

In this example, the `$alias` is defined using the `\` operator, which creates a reference to `$var1`. The value of `$var1` can be accessed and modified through the `$alias` using the `${$alias}` notation.