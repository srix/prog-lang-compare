In Swift, you can get the value of a key in a hash (also known as a dictionary) using the subscript notation, which involves placing the key inside square brackets `[]` after the name of the hash.

Here's an example:

```
var students = ["Alice": 18, "Bob": 21, "Charlie": 19]

let aliceAge = students["Alice"] // This will get the value associated with the "Alice" key, which is 18
print("Alice's age is \(aliceAge)") // Output: Alice's age is 18
```

In this example, we create a hash called `students` that associates the names of three students with their ages. We then use the subscript notation to get the value associated with the "Alice" key and store it in a constant called `aliceAge`. Finally, we print out a message that includes Alice's age.