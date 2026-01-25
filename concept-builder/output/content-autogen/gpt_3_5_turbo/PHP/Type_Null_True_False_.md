In PHP, you can check for null, true, or false using various functions and operators. Here are some examples:

1. Checking for null:

You can use the `is_null()` function to check whether a variable is null or not:

```
$value = null;
if (is_null($value)) {
   echo "value is null";
} else {
   echo "value is not null";
}
```

Output:

```
value is null
```

2. Checking for true/false:

You can use the `var_dump()` function to check the type and value of a variable:

```
$value = true;
var_dump($value);
```

Output:

```
bool(true)
```

You can also use the `===` operator to check whether a variable is true or false:

```
$value = false;
if ($value === true) {
   echo "value is true";
} else {
   echo "value is false";
}
```

Output:

```
value is false
```