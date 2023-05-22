In Julia, you can use the `times()` function to get the current system time in seconds, with high resolution. This function returns a floating-point number representing the number of seconds since the system clock’s epoch time.

Here is an example code snippet showing how to use `times()` in Julia:

```julia
# Get the current system time
t1 = times()

# Run some code here
x = 0
for i in 1:10^6
    x += i
end

# Get the current system time again
t2 = times()

# Compute the elapsed time
elapsed_time = t2 - t1
println("Elapsed time: $elapsed_time seconds.")
```

In this example, we first call `times()` to get the current system time in seconds, and store it in the variable `t1`. Then, we run some code that takes some time to execute, which just sums up the numbers from 1 to 1 million. Finally, we call `times()` again to get the current system time in seconds, and store it in the variable `t2`. We subtract `t1` from `t2` to get the elapsed time, and print out the result.

Keep in mind that the actual resolution and precision of `times()` may vary depending on the system and the hardware being used.