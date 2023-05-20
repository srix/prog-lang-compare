In Rust, an alias is a name that refers to the same type or value as another name. Aliases are helpful when you want to use a different name for a type, especially when the original name is long or complex. Rust allows you to create type aliases using the `type` keyword. Here's how to use aliases in Rust:

```
type Age = u32;

fn display_age(age: Age) {
    println!("You are {} years old", age);
}

fn main() {
    let my_age: Age = 25;
    display_age(my_age);
}
```

In this example, we create an alias `Age` for the `u32` type. We can now use `Age` instead of `u32` to declare variables or function arguments. We define a function `display_age` that takes an argument of type `Age` and displays a message on the console. Finally, in the `main` function, we create a variable `my_age` of type `Age` and pass it to the `display_age` function.

Here's another example that illustrates the use of type aliases in a more complex scenario:

```
struct Point {
    x: f64,
    y: f64,
}

type Distance = f64;

fn distance(p1: &Point, p2: &Point) -> Distance {
    let x_dist = p1.x - p2.x;
    let y_dist = p1.y - p2.y;
    (x_dist*x_dist + y_dist*y_dist).sqrt()
}

fn main() {
    let p1 = Point { x: 1.5, y: 2.5 };
    let p2 = Point { x: 3.5, y: 4.5 };
    let dist = distance(&p1, &p2);
    println!("The distance between p1 and p2 is {:.2}", dist);
}
```

In this example, we define a type alias `Distance` for `f64` and use it as the return type of the `distance` function. The `distance` function takes two `Point` objects as arguments and calculates the Euclidean distance between them using the Pythagorean theorem. In the `main` function, we create two `Point` objects `p1` and `p2`, call the `distance` function with the two points, and display the calculated distance on the console.

In summary, Rust's type aliases are a convenient way to create new names for existing types or values. They help make code more readable and easier to understand, especially when dealing with complex data types and functions.