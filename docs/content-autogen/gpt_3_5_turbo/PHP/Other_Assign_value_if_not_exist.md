In PHP, one can assign a default value to a variable if it does not already exist using the null coalescing operator `??`.

The syntax for using the null coalescing operator is `<?php $variable = $value ?? 'default'; ?>`

If the `$value` is set and not null, then the value of `$value` is assigned to `$variable`. If `$value` is not set or is null, then the value `'default'` is assigned to `$variable`.

Example 1:

```
<?php
//Assigning $name with null value
$name = null;

// Using null coalescing operator
$result = $name ?? 'Anonymous';

echo $result;//Output will be "Anonymous"
?>
```

Example 2:

```
<?php
//Assigning $number with some value
$number = 5;

// Using null coalescing operator
$result = $number ?? 0;

echo $result;//Output will be 5
?>
```

In the above examples, if `$name` is not set or is null, then the default value of `'Anonymous'` will be assigned to `$result`. Similarly, if `$number` is set to `5`, then the value of `$number` will be assigned to `$result` instead of the default value.