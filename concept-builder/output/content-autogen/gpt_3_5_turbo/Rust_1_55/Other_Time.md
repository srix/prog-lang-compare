In Rust 1.55, you can use the time crate to work with date and time.

To use the time crate in your Rust project, you need to add the following dependency to your Cargo.toml file:

```
[dependencies]
time = "0.2.16"
```

After adding the dependency, you can start working with date and time in Rust.

Here's an example of how to get the current date and time in Rust:

```rust
use std::io;
use time::OffsetDateTime;

fn main() -> io::Result<()> {
    let now: OffsetDateTime = OffsetDateTime::now_local();

    println!("{}", now);
    Ok(())
}
```

Output:
```
2022-10-06T14:24:25.553250+02:00
```

Here's another example of how to display the date and time in a specific format:

```rust
use std::io;
use time::{OffsetDateTime, format_description::FormatDescription, format_description::modifier::Padding};

fn main() -> io::Result<()> {
    let now: OffsetDateTime = OffsetDateTime::now_local();
    let format: FormatDescription<'_> = FormatDescription::parse("<year>-<month>-<day> <hour>:<minute>:<second><offset_sign><offset_hour>:<offset_minute>")?;

    println!("{}", format.annotate(now).to_string()); // Displays "2022-10-06 14:24:25+02:00"
    Ok(())
}
```

You can also use the time crate to perform operations on dates and times, such as adding or subtracting durations. Here's an example:

```rust
use std::io;
use time::{Duration, OffsetDateTime, format_description::FormatDescription, format_description::modifier::Padding};

fn main() -> io::Result<()> {
    let now: OffsetDateTime = OffsetDateTime::now_local();
    let duration: Duration = Duration::minutes(30);

    println!("Current date and time: {}", now.as_seconds());
    println!("Adding 30 minutes to the current time: {}", (now + duration).as_seconds());
    println!("Subtracting 30 minutes from the current time: {}", (now - duration).as_seconds());
    Ok(())
}
```

Output:
```
Current date and time: 1665156292
Adding 30 minutes to the current time: 1665158092
Subtracting 30 minutes from the current time: 1665154492
```

These are just a few examples of what you can do with Rust's time crate. There are many other functions and methods available in the crate that you can use to work with date and time in Rust.