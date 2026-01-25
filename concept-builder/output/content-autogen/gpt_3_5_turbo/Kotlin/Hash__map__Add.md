In Kotlin, a hash is called a hash map. To add an element to a hash map in Kotlin, you can simply use the put() function. Here's an example:

```kotlin
// create a hash map
var hashMap = HashMap<String, Int>()

// add elements to the hash map using put() function
hashMap.put("apple", 2)
hashMap.put("orange", 3)
hashMap.put("banana", 4)

// print the hash map
println(hashMap)
```

Output:
```
{apple=2, orange=3, banana=4}
```

In the above example, we first create a new empty hash map using the HashMap constructor. Then, we add elements to the hash map using the put() function. Finally, we print the hash map to verify that the elements were inserted correctly.

You can also use the [] operator to add elements to a hash map in Kotlin. Here's an example:

```kotlin
// create a hash map
var hashMap = HashMap<String, Int>()

// add elements to the hash map using [] operator
hashMap["apple"] = 2
hashMap["orange"] = 3
hashMap["banana"] = 4

// print the hash map
println(hashMap)
```

Output:
```
{apple=2, orange=3, banana=4}
```

In this example, we achieve the same result as the previous example, except we use the [] operator to add elements to the hash map instead of the put() function.