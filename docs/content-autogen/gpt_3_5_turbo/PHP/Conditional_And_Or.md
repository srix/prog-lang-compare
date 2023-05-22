In PHP, "and" and "or" are used as logical operators to combine conditional statements. 

The syntax for "and" is as follows:

```
if (condition1 and condition2) {
  // code to be executed if both conditions are true
}
```

Here's an example:

```
$grade = 80;
if ($grade >= 70 and $grade < 80) {
  echo "You got a B.";
}
```

The output of this code would be "You got a B." because the grade is greater than or equal to 70 and less than 80.

The syntax for "or" is as follows:

```
if (condition1 or condition2) {
  // code to be executed if either condition1 or condition2 is true
}
```

Here's an example:

```
$age = 25;
if ($age < 18 or $age >= 65) {
  echo "You qualify for a discounted rate.";
}
```

The output of this code would be "You qualify for a discounted rate." because the age is less than 18 or greater than or equal to 65. 

Note: "and" and "or" can also be written as "&&" and "||", respectively, in PHP.