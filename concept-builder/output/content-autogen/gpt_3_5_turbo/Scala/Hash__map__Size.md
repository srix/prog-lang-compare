In Scala, we can get the size of a hash by using the `size` method. Here is an example:

```scala
// create a hash map
val hashMap = Map("John" -> 25, "Jane" -> 30, "Jim" -> 35)

// get the size of the hash map
val mapSize = hashMap.size

println(mapSize) // output: 3
```

In this example, we first create a hash map with three key-value pairs. Then, we use the `size` method to get the size of the hash map, which is 3. 

We can also get the size of a hash set using the `size` method. Here is an example:

```scala
// create a hash set
val hashSet = Set("Apple", "Orange", "Banana", "Apple")

// get the size of the hash set
val setSize = hashSet.size

println(setSize) // output: 3
```

In this example, we create a hash set with four elements (including a duplicate element "Apple"). We use the `size` method to get the size of the hash set, which is 3 (because the set only contains three unique elements).