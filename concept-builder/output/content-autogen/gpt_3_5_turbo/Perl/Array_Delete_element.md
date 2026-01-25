Sure, deleting an element from an array in Perl is pretty straightforward. Here's an example:

```perl
my @fruits = ('apple', 'banana', 'orange', 'grape');
# to delete the first element, use splice function
splice @fruits, 0, 1;
# output: ('banana', 'orange', 'grape')
print @fruits;

# to delete the last element, use pop function
pop @fruits;
# output: ('banana', 'orange')
print @fruits;

# to delete an element by its value, use grep and splice functions
@fruits = grep {$_ ne 'orange'} @fruits;
# output: ('banana')
print @fruits;
```

In the above example, the first element is deleted using the `splice` function by specifying the starting index of the element to delete and the number of elements to delete. To delete the last element, the `pop` function is used without any arguments. Finally, to delete an element by its value, `grep` function is used to find the element to delete and then `splice` function is used to delete it from the array.