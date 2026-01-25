In Groovy, we can create a hash using the map notation {}. A hash is a collection of key/value pairs, where both the key and value can be of any data type, including other maps or lists. Here is an example of creating a hash in Groovy:
```groovy
def user = [:] // create an empty hash

user.name = "John" // add a key/value pair
user.age = 25

// or

def user2 = [name: "Jane", age: 30] // create a hash with initial key/value pairs

println(user) // output: [name:John, age:25]
println(user2) // output: [name:Jane, age:30]
```

In the first example, we create an empty hash using the `[:]` notation. Then we add key/value pairs to the hash using the dot notation.

In the second example, we create a hash with initial key/value pairs using the square bracket notation. We can then print the contents of the hash using the `println` method.