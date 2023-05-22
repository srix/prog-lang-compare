In Perl, we can compare strings using various comparison operators. These operators are:

1. ==: This operator is used to compare two strings in Perl. It checks whether both the strings are equal or not.

2. eq: This operator is used to compare two strings in Perl. It checks whether both the strings are equal or not.

3. ne: This operator is used to compare two strings in Perl. It checks whether both the strings are not equal or not.

4. gt: This operator is used to compare two strings in Perl. It checks whether the left string is greater than the right string or not.

5. lt: This operator is used to compare two strings in Perl. It checks whether the left string is less than the right string or not.

6. ge: This operator is used to compare two strings in Perl. It checks whether the left string is greater than or equal to the right string or not.

7. le: This operator is used to compare two strings in Perl. It checks whether the left string is less than or equal to the right string or not.

Example:

Let's say we have two strings "Hello" and "World". We can compare them using the following code:

```
my $str1 = "Hello";
my $str2 = "World";

if ($str1 == $str2) {
   print "Strings are equal";
} else {
   print "Strings are not equal";
}

if ($str1 eq $str2) {
   print "Strings are equal";
} else {
   print "Strings are not equal";
}

if ($str1 ne $str2) {
   print "Strings are not equal";
} else {
   print "Strings are equal";
}

if ($str1 gt $str2) {
   print "$str1 is greater than $str2";
} else {
   print "$str1 is less than $str2";
}

if ($str1 lt $str2) {
   print "$str1 is less than $str2";
} else {
   print "$str1 is greater than $str2";
}

if ($str1 ge $str2) {
   print "$str1 is greater than or equal to $str2";
} else {
   print "$str1 is less than $str2";
}

if ($str1 le $str2) {
   print "$str1 is less than or equal to $str2";
} else {
   print "$str1 is greater than $str2";
}
```

The output of this code will be:

```
Strings are not equal
Strings are not equal
Strings are not equal
Hello is less than World
Hello is less than World
Hello is less than World
Hello is less than World
```