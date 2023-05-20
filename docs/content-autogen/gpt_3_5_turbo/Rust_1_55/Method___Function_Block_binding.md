Block binding in Rust allows variables to be explicitly bound and scoped within a block of code. This means that a variable can be defined and assigned a value within a block and will not be accessible outside of that block. 

The syntax for block binding is to use the `let` keyword followed by the variable name and its value, enclosed in curly braces. 

Here are a few examples of block binding in Rust:

## Example 1

```
fn main() {
    let x = 5;
    
    {
        let y = 10;
        println!("x: {}, y: {}", x, y);
    }
    
    println!("x: {}", x);
}
```

In this example, we first define a variable `x` and assign it the value of 5. We then create a block using curly braces and define a variable `y` with a value of 10. We can access both `x` and `y` within the block and print their values. 

However, outside of the block, we can only access `x` since `y` was defined within the block and is not accessible outside of it. 

The output of this example will be:

```
x: 5, y: 10
x: 5
```

## Example 2

```
fn main() {
    let x = 5;
    
    {
        let x = 10;
        println!("x: {}", x);
    }
    
    println!("x: {}", x);
}
```

In this example, we define a variable `x` with a value of 5 and create a block. Within the block, we define another variable `x` with a value of 10. This creates a new binding for `x` within the block, which shadows the outer `x`. 

When we print the value of `x` within the block, it will be 10 due to the new binding. When we print the value of `x` outside of the block, it will be 5 since the outer `x` was not affected by the inner binding. 

The output of this example will be:

```
x: 10
x: 5
```

## Example 3

```
fn main() {
    let x = 5;
    let y = {
        let x = 10;
        x + 5
    };
    
    println!("x: {}, y: {}", x, y);
}
```

In this example, we define a variable `x` with a value of 5. We then define a block and assign its value to `y`. Within the block, we define a new binding for `x` with a value of 10. We then add 5 to `x` and return the result, which becomes the value of `y`. 

When we print the values of `x` and `y`, we can see that `x` is still 5 since the inner binding did not affect the outer `x`. The value of `y` is 15, which is the result of adding 10 and 5 within the inner block. 

The output of this example will be:

```
x: 5, y: 15
```