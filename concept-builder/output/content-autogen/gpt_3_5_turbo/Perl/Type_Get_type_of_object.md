In Perl, you can get the type or class of an object using the `ref()` function. Here are some examples:

Example 1: Scalar variable

```
my $var = "Hello, World!";
my $type = ref($var);
print "Type of variable: $type\n";
# Output: Type of variable:
```

Here, since `$var` is a scalar variable and not an object, `ref()` returns an empty string.

Example 2: Array reference

```
my @list = (1, 2, 3);
my $ref = \@list;
my $type = ref($ref);
print "Type of reference: $type\n";
# Output: Type of reference: ARRAY
```

Here, `$ref` is a reference to the `@list` array. `ref()` returns "ARRAY", indicating that the reference is to an array.

Example 3: Hash reference

```
my %hash = ('a' => 1, 'b' => 2);
my $ref = \%hash;
my $type = ref($ref);
print "Type of reference: $type\n";
# Output: Type of reference: HASH
```

Here, `$ref` is a reference to the `%hash` hash. `ref()` returns "HASH".

Example 4: Object

```
package MyClass;
sub new { bless {}, shift };
my $obj = MyClass->new();
my $type = ref($obj);
print "Type of object: $type\n";
# Output: Type of object: MyClass
```

Here, we define a simple class `MyClass` that creates an empty object using the `bless()` function. We then create an object `$obj` of this class using the `new()` method. `ref()` returns "MyClass", which is the name of the class.

Note that `ref()` returns the name of the class, not the package name that contains the class. If you want to get the full package name, you can use `Scalar::Util::blessed()` instead of `ref()`.