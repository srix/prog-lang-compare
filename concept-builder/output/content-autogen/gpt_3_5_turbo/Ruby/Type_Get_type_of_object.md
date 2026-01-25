In Ruby, you can get the class of an object using the `class` method. Here are some examples:

```
# getting the class of a string
"hello".class
# => String

# getting the class of an integer
42.class
# => Integer

# getting the class of an array
[1, 2, 3].class
# => Array

# getting the class of a hash
{ name: 'John', age: 30 }.class
# => Hash
```

You can also use the `is_a?` method to check if an object is an instance of a particular class:

```
# checking if an object is a string
"hello".is_a?(String)
# => true

# checking if an object is an array
[1, 2, 3].is_a?(Array)
# => true

# checking if an object is a hash
{ name: 'John', age: 30 }.is_a?(Hash)
# => true
```