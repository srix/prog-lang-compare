In Swift, you can iterate over an array with index using the `enumerated()` method. This method returns a sequence of pairs, where each pair consists of an index number and the corresponding element in the array.

Here's an example:

``` swift
let numbers = [2, 4, 6, 8]

for (index, value) in numbers.enumerated() {
    print("The value of element \(index) is \(value)")
}
```

In this example, `enumerated()` is used to iterate over the `numbers` array and get both the index and value of each element. The `for` loop then prints out each pair in the format "The value of element x is y".

The output of this code would be:

```
The value of element 0 is 2
The value of element 1 is 4
The value of element 2 is 6
The value of element 3 is 8
```

Note that you can use any variable names you want for the index and value - they don't have to be `index` and `value`.