In Perl, an array is a variable that stores a collection of values. To add an element to an array, you can use the push() function. Here's an example:

```
@fruits = ("apple", "banana", "orange");  # declare an array of fruits

# add a new element "pear" to the end of the array
push(@fruits, "pear");

print "Fruits: @fruits\n";   # output the updated array
```

The output of the above code will be:

```
Fruits: apple banana orange pear
```

We can also add multiple elements to an array using the push() function. Here's an example:

```
@numbers = (1, 2, 3, 4);   # declare an array of numbers

# add multiple elements to the end of the array
push(@numbers, 5, 6, 7);

print "Numbers: @numbers\n";   # output the updated array
```

The output of the above code will be:

```
Numbers: 1 2 3 4 5 6 7
```

In addition to the push() function, you can also add elements to an array using the square brackets [] notation. Here's an example:

```
@colors = ("red", "blue", "green");   # declare an array of colors

# add a new element "yellow" to the end of the array
$colors[3] = "yellow";

print "Colors: @colors\n";   # output the updated array
```

The output of the above code will be:

```
Colors: red blue green yellow
```

Note that when using the square brackets [] notation, you need to specify the index at which to insert the new element. In this example, the new element "yellow" is added at index 3, which is the end of the original array.