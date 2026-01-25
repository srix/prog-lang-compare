In Ruby, the `for` statement is used to loop over a sequence of elements. It is often used with the `in` operator to specify the range of elements to process.

Here is the basic syntax:

```
for variable in collection
  # Code to be executed for each element
end
```

Here, `variable` represents an iteration variable, and `collection` represents the sequence of elements to loop over.

Here is an example of using a `for` loop in Ruby to iterate over an array of numbers:

```
numbers = [1, 2, 3, 4, 5]

for num in numbers
  puts num
end
```

This will output:

```
1
2
3
4
5
```

In this example, the `for` loop assigns each element in the `numbers` array to the `num` variable, and then the value of `num` is printed to the console.

Here is another example of using a `for` loop to loop over a range of numbers and perform some operation on each:

```
for i in 1..10
  puts i * 2
end
```

This will output:

```
2
4
6
8
10
12
14
16
18
20
```

In this example, the `for` loop uses a range of numbers from 1 to 10, and multiplies each number by 2 before printing the result to the console.