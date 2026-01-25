In PHP, we can compare numbers using comparison operators. The comparison operators include:

- Equal to ( == ) - This operator checks if two values are equal.
- Not Equal to ( != ) - This operator checks if two values are not equal.
- Greater than ( > ) - This operator checks if a value is greater than another value.
- Lesser than ( < ) - This operator checks if a value is lesser than another value.
- Greater than or equal to ( >= ) - This operator checks if a value is greater than or equal to another value.
- Lesser than or equal to ( <= ) - This operator checks if a value is lesser than or equal to another value.

Examples are:

```
$a = 10;
$b = 20;

//Equal to operator
if($a == $b){
  echo "Number a is equal to number b";
} else {
  echo "Number a is not equal to number b";
}

//Greater than operator
if($a > $b){
  echo "Number a is greater than number b";
} else {
  echo "Number a is not greater than number b";
}

//Lesser than or equal to operator
if($a <= $b){
  echo "Number a is lesser than or equal to number b";
} else {
  echo "Number a is not lesser than or equal to number b";
}
``` 

The output of the above program would be:

```
Number a is not equal to number b
Number a is not greater than number b
Number a is lesser than or equal to number b
```