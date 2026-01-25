In Perl, you can check if a value is null/true/false by using a conditional statement or a Perl function. Here are some examples:

1. Checking if a value is null:
You can use the `defined` function to check if a variable is defined or not. If a variable is not defined, it is considered null. For example,

```
my $var;
if(!defined $var){
  print "The value is null\n";
}
```

2. Checking if a value is true:
In Perl, most scalar values evaluate to true except for the value `undef`, 0, '0', "", and the string 'false'. You can use a simple conditional statement to check if a value is true, For example,

```
my $value = "Hello World";
if($value){
  print "The value is true\n";
}
```

3. Checking if a value is false:
To check if a value is false, you can use a negation operator `!` to negate the value and then check if the result is true. For example,

```
my $num = 0;
if(!$num){
  print "The value is false\n";
}
```

Alternatively, you can use the Perl function `defined` to check if a value is defined or not. If a variable is defined, it is evaluated as true. For example,

```
my $var;
if(!defined $var){
  print "The value is false\n";
}
```

These are some ways to check if a value is null/true/false in Perl.