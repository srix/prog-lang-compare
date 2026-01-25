In PHP, a boolean is a datatype representing a value that is either true or false. Boolean values are often used in programming logic and conditions. Here are some examples of how to use boolean in PHP:

1. Declaring a boolean variable:
```
$flag = true; // or $flag = false;
```

2. Using boolean values in an `if` statement:
```
if ($flag) {
  echo "Flag is true";
} else {
  echo "Flag is false";
}
```

3. Comparing boolean values using relational operators:
```
$flag1 = true;
$flag2 = false;

if ($flag1 == $flag2) {
  echo "Flags are equal";
} elseif ($flag1 && !$flag2) {
  echo "Flag1 is true and Flag2 is false";
} elseif (!$flag1 && $flag2) {
  echo "Flag1 is false and Flag2 is true";
} else {
  echo "No match found";
}
```

4. Using boolean values with logical operators:
```
$flag1 = true;
$flag2 = false;

if ($flag1 && $flag2) {
  // this condition will not pass since $flag2 is false
  echo "Both flags are true";
} elseif ($flag1 || $flag2) {
  // this condition will pass since $flag1 is true
  echo "At least one flag is true";
} else {
  // this condition will not be reached since one flag is true
  echo "No flags are true";
}
```