In Rust, we import libraries using the `use` keyword followed by the module path of the library. Here's an example:

Let's say we want to use the `rand` crate in our Rust code. Here's how we would import it:

```rust
use rand::Rng;
```

This imports the `Rng` trait from the `rand` crate. We can now use this trait in our code to generate random numbers.

Another example is if we want to use the `chrono` crate for date and time handling in Rust. Here's how we would import it:

```rust
use chrono::{DateTime, Utc};
```

This imports the `DateTime` struct and the `Utc` time zone from the `chrono` crate. We can now use these types to work with dates and times in our Rust code.

We can also use the `as` keyword to give an alias to the imported library. For example:

```rust
use rand::Rng as RandomNumberGenerator;
```

This imports the `Rng` trait from the `rand` crate and gives it an alias `RandomNumberGenerator`. We can now use this alias instead of the full name `rand::Rng` in our code.

We can use a wildcard (`*`) to import all the items from a module. For example:

```rust
use rand::*;
```

This imports all the items from the `rand` crate. However, it's generally not recommended to use this method as it can pollute the namespace and make it harder to read and maintain the code. It's better to explicitly import only the items we need.