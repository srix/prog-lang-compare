In Swift, we can use the concept of destructuring assignment to extract multiple values from a tuple or an array into separate variables in a single statement. 

Here is an example of how to use destructuring assignment with tuples in Swift:

```
let myTuple = (name: "John", age: 30, city: "New York")    // create a tuple

let (name, age, city) = myTuple     // use destructuring assignment to extract values

print(name)    // prints "John"
print(age)    // prints "30"
print(city)    // prints "New York"
```

In the above example, we create a tuple with three values. Then, we use destructuring assignment to extract each value into a separate variable. The three variables, `name`, `age`, and `city`, are assigned the values "John", 30, and "New York" respectively.

Here is an example of using destructuring assignment with arrays in Swift:

```
let myArray = [1, 2, 3]    // create an array

let (first, second, third) = myArray    // use destructuring assignment to extract values

print(first)    // prints "1"
print(second)   // prints "2"
print(third)    // prints "3"
```

In this example, we create an array with three values. Then, we use destructuring assignment to extract each value into a separate variable. The three variables, `first`, `second`, and `third`, are assigned the values 1, 2, and 3 respectively.

Destructuring assignment can be useful for simplifying the process of extracting values from tuples and arrays in Swift, especially when dealing with complex data structures.