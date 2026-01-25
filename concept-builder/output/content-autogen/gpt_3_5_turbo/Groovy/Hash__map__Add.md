In Groovy, you can add an element to a hash using the `put()` method or by using shorthand notation.

Here's an example of using `put()` method:

```
def hash = ['name': 'John', 'age': 30]
hash.put('city', 'New York')

println(hash) // Output: [name:John, age:30, city:New York]
```

In the above example, we have created a hash with two key-value pairs. Then, we have added a new key-value pair to the hash using the `put()` method.

Here's an example of using shorthand notation:

```
def hash = ['name': 'John', 'age': 30, 'city': 'London']
hash.'zip' = 12345

println(hash) // Output: [name:John, age:30, city:London, zip:12345]
```

In the above example, we have used shorthand notation to add a new key-value pair to the hash. This is done by using a single quote to enclose the new key name and then assigning the value to it with a `=` sign.