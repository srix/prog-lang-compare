In Groovy, there are several ways to find all elements of an array that satisfy a condition. Here are three different approaches with examples:

1. Using the find method: 

You can use the find method to get the first element that satisfies a condition, and then iterate over the array until all elements are found. Here is an example:

```
def array = [2, 4, 6, 8, 10]
def result = []
def condition = {it % 4 == 0}

def index = 0
while (index < array.size()) {
    def element = array[index]
    if (condition(element)) {
        result << element
    }
    index++
}

println result
// Output: [4, 8]
```

2. Using the findAll method:

The `findAll` method can be used to retrieve all the elements in an array that satisfy a specified condition. 

```
def array = [2, 4, 6, 8, 10]
def condition = { it % 4 == 0 }

def result = array.findAll(condition)

println result
// Output: [4, 8]
```

3. Using the collect method:

The `collect` method loops over the array and applies a transformation to each element. In this case, we can use it to apply a filter that only keeps elements that satisfy a condition. Here is an example:

```
def array = [2, 4, 6, 8, 10]
def result = array.collect { it % 4 == 0 ? it : null }.findAll { it != null }

println result
// Output: [4, 8]

```

All three of these methods will produce the same result: a new array containing all the elements that satisfy the specified condition.