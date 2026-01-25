In PHP, a constant is a read-only variable whose value cannot be changed during the script execution. Once a constant is defined, it cannot be redefined or undefined.

To create a constant in PHP, we use the `define()` function. The syntax of the `define()` function is as follows:

```php
define(name, value, case-insensitive)
```

Where:
- `name`: Represents the name of the constant.
- `value`: Represents the value of the constant.
- `case-insensitive`: Optional parameter that specifies whether the constant name should be case-insensitive. By default, it is set to `false`.

Here's an example of how to define and use a constant in PHP:

```php
define("PI", 3.141592653589793); // defines a constant named PI with value 3.141592653589793

//Using the constant
echo "The value of PI is: " . PI;
```

Output:
```
The value of PI is 3.141592653589793
```

In the code above, we defined a constant named `PI` with the value of `3.1415926535889793`. We then used the constant in the `echo` statement.

Note that constant names in PHP are case-sensitive by default. If you want to make them case-insensitive, pass `true` as the third argument to the `define()` function:

```php
define("EXAMPLE", "This is an example"); // defines a constant named EXAMPLE with value "This is an example"
define("example", "This is another example", true); // defines a constant named example with value "This is another example" (case-insensitive)

//Using the constant
echo EXAMPLE . "<br>";
echo example;
```

Output:
```
This is an example
This is another example
```

In the code above, we defined two constants - `EXAMPLE` and `example`. The first one is case-sensitive and the second one is case-insensitive. We then used both of the constants in the `echo` statements.