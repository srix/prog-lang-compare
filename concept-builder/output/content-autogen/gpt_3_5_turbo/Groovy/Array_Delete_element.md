Sure! In Groovy, we can use the `remove()` method to delete an element from an array. Here's an example:

```
// create an array
def myArray = ['apple', 'banana', 'orange', 'pear']

// remove the element at index 2 (i.e. 'orange')
myArray.remove(2)

// print the updated array
println(myArray)
```

Output:
```
[apple, banana, pear]
```

In this example, we created an array `myArray` containing four elements. We then removed the element at index 2 (which is `'orange'`) using the `remove()` method. Finally, we printed the updated array to the console.

We can also use the `removeAll()` method to remove multiple elements from an array at once. Here's an example:

```
// create an array
def myArray = ['apple', 'banana', 'orange', 'pear']

// remove 'banana' and 'pear'
myArray.removeAll(['banana', 'pear'])

// print the updated array
println(myArray)
```

Output:
```
[apple, orange]
```

In this example, we created the same array `myArray`. We then removed both `'banana'` and `'pear'` from the array using the `removeAll()` method. Finally, we printed the updated array to the console.