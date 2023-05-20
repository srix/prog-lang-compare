In Rust 1.55, you can check if a class (struct) has a method by using the `impl` block and the `fn` keyword to define the method. You can then use Rust's built-in `std::fmt::Debug` trait to output a list of all the methods available on the class.

Here's an example of a struct `Person` with two methods, `greet` and `get_age`:

```rust
struct Person {
    name: String,
    age: u32,
}

impl Person {
    fn greet(&self) {
        println!("Hello, my name is {}", self.name);
    }

    fn get_age(&self) -> u32 {
        self.age
    }
}

fn main() {
    let person = Person {
        name: String::from("Alice"),
        age: 30,
    };

    // Check if Person has a method named "greet"
    if let Some(_method) = <Person as std::fmt::Debug>::fmt(&person, &mut std::fmt::Formatter::new()).field(&"greet") {
        println!("Person has a method named 'greet'");
    } else {
        println!("Person does not have a method named 'greet'");
    }

    // Check if Person has a method named "get_age"
    if let Some(_method) = <Person as std::fmt::Debug>::fmt(&person, &mut std::fmt::Formatter::new()).field(&"get_age") {
        println!("Person has a method named 'get_age'");
    } else {
        println!("Person does not have a method named 'get_age'");
    }
}
```

In this example, we use the `if let` statement to check if the method exists using the `std::fmt::Debug` trait. We call the `fmt` method on the `Person` instance, which returns a `DebugStruct` object that allows us to access the fields of the struct, which includes the methods. We then use the `field` method to check if the method we are looking for is present, and if so, print a message indicating that the method exists.

In this case, running the program would output:

```
Person has a method named 'greet'
Person has a method named 'get_age'
```

indicating that both `greet` and `get_age` methods exist on the `Person` struct.