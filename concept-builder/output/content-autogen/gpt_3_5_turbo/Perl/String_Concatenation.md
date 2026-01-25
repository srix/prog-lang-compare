In Perl, you can concatenate strings using the dot (.) operator. Here's an example:

```perl
my $str1 = "Hello";
my $str2 = "World";
my $str3 = $str1 . " " . $str2;

print $str3;
```

Output:
```
Hello World
```

In the above example, we first created two separate string variables, `$str1` and `$str2`. We then used the dot operator to concatenate them together and store the result in a third variable `$str3`. Finally, we printed out the resulting string `$str3`.

You can also concatenate strings along with other data types. Here's an example:

```perl
my $name = "John";
my $age = 30;
my $str = "My name is " . $name . " and I am " . $age . " years old.";

print $str;
```

Output:
```
My name is John and I am 30 years old.
```

In this example, we concatenated string variables `$name` and `$age` along with some text to create the final string `$str`.