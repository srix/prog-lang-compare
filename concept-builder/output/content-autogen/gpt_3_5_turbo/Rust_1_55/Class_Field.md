In Rust, a struct is a fundamental data structure that allows you to encapsulate related pieces of data. Fields in a struct are the variables that store data belonging to the struct. Fields can be of any data type in Rust.

Here's an example:

```
struct Person {
    name: String,
    age: u32,
    is_adult: bool,
}

impl Person {
    // This is a method that can access and modify
    // the fields of the struct.
    fn say_hello(&self) {
        println!("Hello! My name is {} and I'm {} years old.", self.name, self.age);
    }
}

fn main() {
    let person = Person {
        name: String::from("John"),
        age: 32,
        is_adult: true,
    };

    // Access the fields of the struct by name.
    println!("{} is an adult: {}", person.name, person.is_adult);

    // Call a method on the struct.
    person.say_hello();
}
```

In this example, `Person` is a struct with three fields: `name`, `age`, and `is_adult`. The `say_hello` method can access and modify the fields of the `Person` struct. 

To access a field in a struct, you use the dot notation following the struct's instance variable name, like so:

```
person.name
```

Here, `person` is the variable name for the `Person` instance, and `name` is the field name.

You can also modify a field's value in the same manner:

```
person.age = 40;
```

In Rust, fields can also have visibility modifiers such as `pub` for public or `priv` for private. A public field can be accessed from outside of its module (or even crate). A private field can only be accessed from within its module. 

Here's an example of a struct with a public field:

```
pub struct Rectangle {
    pub width: u32,
    pub height: u32,
}
```

In conclusion, Rust provides support for struct and fields with different visibility modifiers, which allows for encapsulating related pieces of data, accessing them through methods and making the fields public to be accessed by other modules.