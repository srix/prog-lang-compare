Destructuring assignment in Rust allows you to extract values from complex types such as tuples, structs, enums or arrays and assign them to variables using pattern matching.

Here are some examples of destructuring assignment in Rust 1.55

Destructuring a Tuple:

```
let my_tuple = (1, 2, 3);
let (a, b, c) = my_tuple;

println!("a = {} b = {} c = {}", a, b, c); // Output: a = 1 b = 2 c = 3
```

Destructuring a Struct:

```
struct MyStruct {
    name: String,
    age: u32
}

let my_struct = MyStruct { name: "John".to_string(), age: 25 };
let MyStruct { name, age } = my_struct;

println!("Name: {} Age: {}", name, age); // Output: Name: John Age: 25
```

Destructuring an Enum:

```
enum MyEnum {
    Option1(u32),
    Option2(String),
    Option3(bool)
}

let my_enum = MyEnum::Option1(10);
if let MyEnum::Option1(value) = my_enum {
    println!("Value: {}", value); // Output: Value: 10
}
```

Destructuring an Array:

```
let my_array = [1, 2, 3];
let [a, b, c] = my_array;

println!("a = {} b = {} c = {}", a, b, c); // Output: a = 1 b = 2 c = 3
```

Destructuring a Slice:

```
let my_slice = &[1, 2, 3];
let [a, b, c] = my_slice;

println!("a = {} b = {} c = {}", a, b, c); // Output: a = 1 b = 2 c = 3
```


Note that in all the examples, the variables on the left side should match the structure on the right side for the destructuring to work. It is also possible to use pattern matching to extract specific values from complex types and ignore the ones you don't need.