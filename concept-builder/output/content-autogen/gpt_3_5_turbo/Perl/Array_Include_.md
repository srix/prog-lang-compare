In Perl, the `in` operator is used to check whether an array includes a specific element. Here is an example:

```
@array = (1,2,3,4,5);
if (3 in @array) {
  print "Element 3 exists in the array";
}
```

In this example, we declare an array `@array` with values `1,2,3,4,5`. Then we use the `in` operator to check if the element `3` exists in the array. If it does, the program will print "Element 3 exists in the array".

Similarly, you can also use the `grep` function in Perl to check if an array includes an element. Here is an example:

```
@array = (1,2,3,4,5);
if (grep /^3$/, @array) {
  print "Element 3 exists in the array";
}
```

In this example, we use the `grep` function to search for the element `3` in the array `@array`. If the element exists, the function will return the value, which evaluates to true and the program will print "Element 3 exists in the array".