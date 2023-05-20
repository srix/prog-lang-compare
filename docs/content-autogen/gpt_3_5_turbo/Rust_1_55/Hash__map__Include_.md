In Rust 1.55, you can check if a hash (HashMap) includes a key using the `contains_key` method. Here's an example:

```rust
use std::collections::HashMap;

fn main() {
    let mut sports = HashMap::new();
    sports.insert("Basketball", "USA");
    sports.insert("Soccer", "Brazil");
    sports.insert("Hockey", "Canada");

    let sport = "Soccer";
    if sports.contains_key(sport) {
        let country = sports.get(sport).unwrap();
        println!("{} is played in {}.", sport, country);
    } else {
        println!("We don't have information about {}.", sport);
    }
}
```

In this example, we create a HashMap called `sports` which maps sports to their countries. We then check if the key "Soccer" is in the HashMap using the `contains_key` method. If it is, we get the value associated with the key and print a message. Otherwise, we print a message stating that we don't have information about the sport.

Output:
```
Soccer is played in Brazil.
```

If we want to check for multiple keys, we can use a for loop:

```rust
use std::collections::HashMap;

fn main() {
    let mut sports = HashMap::new();
    sports.insert("Basketball", "USA");
    sports.insert("Soccer", "Brazil");
    sports.insert("Hockey", "Canada");

    let keys_to_check = vec!["Soccer", "Tennis", "Basketball"];

    for sport in keys_to_check {
        if sports.contains_key(sport) {
            let country = sports.get(sport).unwrap();
            println!("{} is played in {}.", sport, country);
        } else {
            println!("We don't have information about {}.", sport);
        }
    }
}
```

In this example, we create a vector of keys to check and loop through them. For each key, we check if it is in the HashMap using `contains_key`, and print a message accordingly. 

Output:
```
Soccer is played in Brazil.
We don't have information about Tennis.
Basketball is played in USA.
```

I hope this helps! Let me know if you have any other questions.