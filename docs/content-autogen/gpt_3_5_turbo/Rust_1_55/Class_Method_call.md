To call a method in a class in Rust, you need to define the method within the class implementation block. Here is an example:

```rust
struct Person {
    name: String,
    age: i32,
}

impl Person {
    fn introduce(&self) {
        println!("Hi, my name is {} and I am {} years old.", self.name, self.age);
    }
}

fn main() {
    let p = Person{name: String::from("John"), age: 25};
    p.introduce();
}
```

In this example, we define a `Person` struct with a `name` and `age` field. We then define an `introduce` method within the `impl` block for the `Person` struct. This method uses the `self` keyword to access the `name` and `age` fields of the instance it is called on.

In the `main` function, we create a `Person` instance with the name "John" and age 25. We then call the `introduce` method on this instance using the dot notation (i.e., `p.introduce()`).

When run, this program will output:

```
Hi, my name is John and I am 25 years old.
```

This demonstrates how to define and call a method within a class in Rust.