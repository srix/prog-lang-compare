In PHP, the `break` statement is used to terminate the execution of the current loop or switch case statement. Here are some examples of how to use `break` in PHP:

1. Using break in a for loop:

```
for ($i = 1; $i <= 10; $i++) {
    echo $i;
    if ($i == 5) {
        break;
    }
}
```

The above code will output the numbers 1 to 5, and then terminate the for loop when the `$i` variable is equal to 5.

2. Using break in a while loop:

```
$i = 1;
while ($i <= 10) {
    echo $i;
    if ($i == 5) {
        break;
    }
    $i++;
}
```

The above code will output the numbers 1 to 5, and then terminate the while loop when the `$i` variable is equal to 5.

3. Using break in a switch case statement:

```
$var = 2;

switch ($var) {
    case 1:
        echo "This is case 1";
        break;
    case 2:
        echo "This is case 2";
        break;
    case 3:
        echo "This is case 3";
        break;
    default:
        echo "This is the default case";
}
```

The above code will output "This is case 2" and then terminate the switch case statement.