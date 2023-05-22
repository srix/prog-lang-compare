To get the value of a key in a hash (also known as a map) in Scala, you can use the `apply` method or the `getOrElse` method. Here are examples of each:

Using the apply method:
```scala
val map = Map("key1" -> "value1", "key2" -> "value2")
val value1Option = map.get("key1") // Retrieves the value of key1 as an Option
val value1 = map("key1") // Retrieves the value of key1 using the apply method
```

Using the getOrElse method:
```scala
val map = Map("key1" -> "value1", "key2" -> "value2")
val value1 = map.getOrElse("key1", "default") // Retrieves the value of key1 with a default value if it doesn't exist in the map
val value3 = map.getOrElse("key3", "default") // Retrieves the value of key3 with a default value because it doesn't exist in the map
```

Using the apply method will throw an exception if the key doesn't exist in the map, while using the getOrElse method will return a default value if the key doesn't exist in the map.