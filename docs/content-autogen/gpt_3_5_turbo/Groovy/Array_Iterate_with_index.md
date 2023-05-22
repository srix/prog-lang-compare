In Groovy, you can use a for-loop to iterate over an array and access the array elements with the help of their indices. Here's some example code to demonstrate how to do this:

```groovy
def arr = [5, 6, 7, 8]

// iterate over the array with index
for (i in 0..<arr.size()) {
    println("Element at index $i is ${arr[i]}")
}
```

The output will be:

```
Element at index 0 is 5
Element at index 1 is 6
Element at index 2 is 7
Element at index 3 is 8
```

In the above code, we first define an array `arr` with four elements. Then we use a for-loop to iterate over the array with index. We use the `..<` operator to create a range from 0 to `arr.size() - 1`, which includes all valid indices of the array. In each iteration, we print the index and the corresponding element of the array. Note that we access the elements of the array using the square bracket notation with the index as the subscript.