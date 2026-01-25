In Java, a hash is implemented using a HashMap or a HashTable. Here is how you can retrieve the value of a key in a hash in Java:

1. Using the get() method of HashMap:

```
// Creating a HashMap object
HashMap<String, Integer> map = new HashMap<>();

// Adding key-value pairs to the map
map.put("John", 25);
map.put("Mary", 30);

// Retrieving values using get() method
int johnAge = map.get("John");
int maryAge = map.get("Mary");

System.out.println(johnAge); // Output: 25
System.out.println(maryAge); // Output: 30
```

2. Using the containsKey() method to check if the key exists in the hash, and then using the get() method to retrieve the value:

```
// Creating a HashMap object
HashMap<String, Integer> map = new HashMap<>();

// Adding key-value pairs to the map
map.put("John", 25);
map.put("Mary", 30);

// Retrieving values using containsKey() and get() methods
if (map.containsKey("John")) {
    int johnAge = map.get("John");
    System.out.println(johnAge); // Output: 25
}
```

3. Using a for-each loop to iterate over the entries of the hash and check for the required key:

```
// Creating a HashMap object
HashMap<String, Integer> map = new HashMap<>();

// Adding key-value pairs to the map
map.put("John", 25);
map.put("Mary", 30);

// Retrieving values using for-each loop
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    if (entry.getKey().equals("John")) {
        int johnAge = entry.getValue();
        System.out.println(johnAge); // Output: 25
    }
}
```

In all these examples, we assumed that the hash has Strings as keys and Integers as values, but this can be easily modified to work with other types.