In PHP, you can compare strings using the comparison operators such as the double equals (==) operator or triple equals (===) operator. Here are some examples:

Using double equals (==) operator:

```
$string1 = "hello";
$string2 = "world";

if ($string1 == $string2) {
  echo "The two strings are equal.";
} else {
  echo "The two strings are not equal.";
} 
```

The output of this code will be "The two strings are not equal."

Using triple equals (===) operator:

```
$string1 = "hello";
$string2 = "hello";
$string3 = 123;

if ($string1 === $string2) {
  echo "The two strings are equal.";
} else {
  echo "The two strings are not equal.";
}

if ($string1 === $string3) {
  echo "The two strings are equal.";
} else {
  echo "The two strings are not equal.";
}
```

The output of this code will be "The two strings are equal." and "The two strings are not equal." respectively. Here, the triple equals operator checks both the value and the data type of the string while comparing.