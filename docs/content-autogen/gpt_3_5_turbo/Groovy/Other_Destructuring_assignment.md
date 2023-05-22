Destructuring Assignment allows Groovy developers to extract values from arrays or objects and assign them to separate variables. This is an efficient way to extract and operate on specific data. 

Here are some examples of how to use Destructuring Assignment in Groovy:

1. Destructuring an array:

```
def myArray = [1, 2, 3]
def [a, b, c] = myArray
println(a) // prints 1
println(b) // prints 2
println(c) // prints 3
```

2. Destructuring an object:

```
def myObject = [name: "John", age: 25]
def [name, age] = myObject
println(name) // prints "John"
println(age) // prints 25
```

3. Destructuring in a loop:

```
def myList = [[1,"dog"], [2,"cat"], [3,"bird"]]
for ([number, animal] in myList) {
    println("Animal $animal has number $number")
}

// prints:
// Animal dog has number 1
// Animal cat has number 2
// Animal bird has number 3
```

In this example, the loop iterates through the list of lists, destructures each sub-list into separate variables, and prints out a string using those variables.

Overall, the Destructuring Assignment in Groovy is a convenient way to extract values from arrays or objects and assign them to variables, making it faster to manipulate data.