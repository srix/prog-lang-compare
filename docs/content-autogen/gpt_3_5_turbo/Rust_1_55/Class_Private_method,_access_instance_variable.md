In Rust, private methods can access instance variables through the use of the `self` keyword. Here's an example:

```
struct Person {
  name: String,
  age: i32,
}

impl Person {
  fn new(name: String, age: i32) -> Person {
    Person { name, age }
  }

  fn print_details(&self) {
    println!("Name: {}", self.name);    // Accessing instance variable 'name'
    println!("Age: {}", self.age);      // Accessing instance variable 'age'
    
    self.private_method();
  }

  fn private_method(&self) {
    println!("Private method called.");
    println!("Name: {}", self.name);    // Accessing instance variable 'name'
    println!("Age: {}", self.age);      // Accessing instance variable 'age'
  }
}

fn main() {
  let person = Person::new(String::from("John"), 30);
  person.print_details();
}
```

In the `print_details` function, by using `self.name` and `self.age`, we are able to access the `name` and `age` instance variables. We also call the `private_method` function, which is private, and it has access to those same instance variables via `self`.

Overall, instance variables can be accessed in private methods the same way they are accessed in public methods using the `self` keyword.