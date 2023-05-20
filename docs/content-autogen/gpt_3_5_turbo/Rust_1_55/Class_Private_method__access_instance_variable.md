In Rust, private methods can access private instance variables of a struct. Here is an example:

```
struct Example {
    counter: i32,
}

impl Example {
    fn increase_counter(&mut self) {
        self.increment_counter_private();
    }

    fn decrement_counter(&mut self) {
        self.counter -= 1;
    }

    fn increment_counter_private(&mut self) {
        self.counter += 1;
        // We can access "counter" instance variable here because we are inside the Example struct.
    }
}

fn main() {
    let mut example = Example { counter: 0 };
    example.increase_counter();
    example.decrement_counter();
    println!("Counter: {}", example.counter); // Output: 1
}
```

In this example, we have a `struct` named `Example` with an instance variable named `counter`. We defined three methods under `impl Example`, where `increase_counter` is the public method that increments the counter by calling a private method `increment_counter_private`, and `decrement_counter` is the public method that decrements the counter. Finally, we have `increment_counter_private` method, which is a private method and only accessible from within the `Example` struct.

As you can see, `increment_counter_private` method is able to access the instance variable `counter` directly because it is within the same struct. This way, we can keep some data private and only provide a public interface for working with that data.