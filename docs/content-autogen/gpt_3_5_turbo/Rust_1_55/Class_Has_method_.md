In Rust, to check if a class has a method, we can use the `std::intrinsics::type_name` function along with the `std::any::TypeId` type.

Here's an example code that demonstrates this:

```rust
use std::any::TypeId;
use std::intrinsics::type_name;

// Define a sample class
struct MyClass {
    name: String,
}

// Implement a method for the class
impl MyClass {
    fn display_name(&self) {
        println!("Name: {}", self.name);
    }
}

fn main() {
    // Create an instance of MyClass
    let obj = MyClass{name: String::from("MyClass")};

    // Check if the object has the "display_name" method
    let display_name_exist = (|| {
        let obj_type = TypeId::of::<MyClass>();
        let name = type_name::<MyClass>();
        let method_name = "display_name";
        let method_type = TypeId::of::<fn(&MyClass) -> ()>();
        let method_exist = obj_type == method_type;
        method_exist
    })();

    // Print the result
    if display_name_exist {
        println!("MyClass has the 'display_name' method");
        obj.display_name();
    } else {
        println!("MyClass does not have the 'display_name' method");
    }
}
```

In this example, we define a struct called `MyClass` and implement a method for it called `display_name`. In the `main` function, we check if the `obj` instance of `MyClass` has the `display_name` method using the `TypeId` and `type_name` functions to get the type information for the class and method. If the method exists, we call it on the object.