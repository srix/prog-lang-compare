In Rust, we can create private methods by simply prefixing the method name with an underscore, like `_private_method()`. This makes the method inaccessible from outside the current module scope.

Here's an example code snippet that demonstrates the use of private methods in Rust:

```rust
mod my_module {
    pub struct MyStruct {
        pub public_field: i32,
        private_field: i32,
    }

    impl MyStruct {
        pub fn new() -> MyStruct {
            MyStruct {
                public_field: 0,
                private_field: 42,
            }
        }

        pub fn public_method(&self) {
            println!("This is a public method!");
            self._private_method();
        }

        fn _private_method(&self) {
            println!("This is a private method!");
            println!("Accessing private field: {}", self.private_field);
        }
    }
}

fn main() {
    let my_instance = my_module::MyStruct::new();
    my_instance.public_method();

    // These lines will result in a compile-time error because
    // the _private_method() is not accessible outside the module scope.
    // my_instance._private_method();
    // println!("Accessing private field: {}", my_instance.private_field);
}
```

In this example, we define a module `my_module` that contains a struct `MyStruct` with two fields: `public_field` (a public field) and `private_field` (a private field). We implement two methods for `MyStruct`: `public_method()` and `_private_method()`. 

The `public_method()` is a public method that can be called from outside the module scope, and it prints a message and calls the private `_private_method()`. The `_private_method()` is a private method that can only be called within the module scope, and it prints a message and accesses the private `private_field`. 

Inside the `main()` function, we create an instance of `MyStruct`, call the `public_method()` on it, and see both messages printed to the console. We also attempt to call `_private_method()` and access `private_field`, but these lines result in a compile-time error because they are not accessible outside the module scope. 

So, in short, this example demonstrates that by prefixing the method name with an underscore, we can create a private method that is only accessible within the current module scope.