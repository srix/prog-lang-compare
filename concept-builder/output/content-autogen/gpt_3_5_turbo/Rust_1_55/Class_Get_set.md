In Rust, structs and enums can be used similar to classes in other programming languages. To access and modify the internal data of a struct or enum, we use getters and setters, which are defined using the `get` and `set` keywords.

Here's an example of how to define a struct with getters and setters:

```rust
struct Person {
    name: String,
    age: u32,
}

impl Person {
    // Getter for name
    fn get_name(&self) -> &String {
        &self.name
    }

    // Setter for name
    fn set_name(&mut self, name: String) {
        self.name = name;
    }

    // Getter for age
    fn get_age(&self) -> u32 {
        self.age
    }

    // Setter for age
    fn set_age(&mut self, age: u32) {
        self.age = age;
    }
}
```

Here's how we can use the getters and setters defined in our struct:

```rust
let mut person = Person {
    name: String::from("John"),
    age: 30,
};

// Use getter for name
println!("Name: {}", person.get_name());

// Use setter for name
person.set_name(String::from("Jane"));

// Use getter for age
println!("Age: {}", person.get_age());

// Use setter for age
person.set_age(31);
```

In the above example, we can see that we can use a mutable reference to modify the struct's internal data using the setters. We can also use immutable references to access the data using the getters.

Overall, using getters and setters can help to enforce encapsulation in Rust, and provide a cleaner and more readable way of accessing and modifying the internal data of our structs and enums.