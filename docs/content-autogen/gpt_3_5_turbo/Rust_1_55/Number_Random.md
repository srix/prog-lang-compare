In Rust 1.55, you can use the standard library's `rand` crate to generate random numbers. Here's how:

1. Add `rand` to your dependencies in `Cargo.toml`:

   ```
   [dependencies]
   rand = "0.8.4"
   ```

2. Import the `Rng` trait and the `thread_rng` function from the `rand` crate:

   ```
   use rand::Rng;
   use rand::thread_rng;
   ```

3. Use `thread_rng` to create a random number generator:

   ```
   let mut rng = thread_rng();
   ```

4. Use methods on the `Rng` trait to generate random numbers. Examples:

   - Generate a random integer between 1 and 100 (inclusive):

     ```
     let n = rng.gen_range(1..=100);
     ```

   - Generate a random boolean:

     ```
     let b = rng.gen_bool(0.5); // 50% chance of true/false
     ```
     
   - Generate a random floating-point number between 0 and 1:
     
     ```
     let f = rng.gen::<f64>();
     ```

   - Generate a random integer from a normal distribution with mean 0 and standard deviation 1:

     ```
     let n = rng.gen::<f64>().powf(2.0).ln() * (-2.0).sqrt() as i32;
     ```