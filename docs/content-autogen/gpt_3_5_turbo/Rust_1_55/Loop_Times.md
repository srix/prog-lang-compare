In Rust 1.55, the standard library provides the `std::time::Duration` struct to work with time values. You can create a `Duration` using various time units such as seconds, milliseconds, microseconds, and nanoseconds. Here are some examples:

```rust
use std::time::Duration;

// Create a duration of 5 seconds
let duration = Duration::new(5, 0);

// Create a duration of 1 millisecond
let duration = Duration::from_millis(1);

// Create a duration of 500 microseconds
let duration = Duration::from_micros(500);

// Create a duration of 10 nanoseconds
let duration = Duration::from_nanos(10);

```

Once you have a `Duration`, you can perform various operations on it, such as adding and subtracting durations and comparing durations. For example:

```rust
use std::time::Duration;

let duration1 = Duration::from_secs(10);
let duration2 = Duration::from_secs(5);

// Add two durations
let sum = duration1 + duration2;
println!("{:?}", sum); // Output: "15s"

// Subtract two durations
let diff = duration1 - duration2;
println!("{:?}", diff); // Output: "5s"

// Compare two durations
if duration1 > duration2 {
    println!("duration1 is greater");
} else {
    println!("duration2 is greater");
}
```

Additionally, Rust has a built-in `std::time::SystemTime` struct, which represents the current time. You can create `SystemTime` instances using the `now()` method and compare them with each other to measure the duration between them. Here's an example:

```rust
use std::time::{Duration, SystemTime};

let start_time = SystemTime::now();

// Do some work...

let end_time = SystemTime::now();

// Calculate the duration between start_time and end_time
let duration = match end_time.duration_since(start_time) {
    Ok(val) => val,
    Err(e) => e.duration(),
};

println!("{:?}", duration);
```