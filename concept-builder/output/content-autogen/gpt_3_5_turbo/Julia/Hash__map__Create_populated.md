In Julia, a hash table can be created using the `Dict()` constructor. A hash table is a collection of key-value pairs, where each key is unique. Below are some examples:

Example 1: Creating a simple hash table with strings:

```julia
dictionary = Dict("apple" => 1, "banana" => 2, "cherry" => 3)
```

In this example, we created a dictionary or hash called `dictionary` with three keys: "apple", "banana", and "cherry". Each key is associated with a corresponding value, which are integers 1, 2, and 3.

Example 2: Creating a hash table using loops:

```julia
fruits = ["apple", "banana", "cherry"]
prices = [1, 2, 3]
dictionary = Dict()
for i in 1:length(fruits)
    dictionary[fruits[i]] = prices[i]
end
```

In this example, we created an empty dictionary called `dictionary`. We then looped through the two arrays `fruits` and `prices`, and added each key-value pair to the dictionary using the syntax `dictionary[key] = value`.

Example 3: Creating a hash table with different data types:

```julia
dictionary = Dict("age" => 20, "name" => "John", "is_student" => true)
```

In this example, we created a dictionary with keys "age", "name", and "is_student". The corresponding values are an integer (20), a string ("John"), and a boolean value (true).

These are some basic examples of how to create a hash table in Julia. Once you have created a hash, you can easily access and manipulate its contents using the key indexing syntax.