In Groovy, a hash is called a map. Here's how you can get the value of a key in a map: 

```groovy
def map = [name: 'John', age: 35, city: 'New York']

// Using the get() method
def age = map.get('age')
println age // Output: 35

// Using the square bracket notation
def city = map['city']
println city // Output: New York
```

In the example above, we created a map with three key-value pairs. To get the value of a particular key, we used the `get()` method or the square bracket notation. Both methods return the value associated with the given key. 

You can also use the safe navigation operator (`?.`) to avoid errors when the key is not present in the map:

```groovy
def phoneBook = [John: '555-1234', Jane: '555-5678']

// Using safe navigation operator
def jackPhone = phoneBook.Jack?.toUpperCase()
println jackPhone // Output: null
```

In this example, we attempted to get the phone number of a person named Jack from the `phoneBook` map. However, the key `Jack` is not present in the map, so we used the safe navigation operator to avoid a `NullPointerException`. The safe navigation operator returns null instead of throwing an exception when the left-hand side is null.