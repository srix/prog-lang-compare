In Kotlin, you can use the built-in `kotlin.time.Duration` and `kotlin.time.Instant` classes to work with time intervals and timestamps. 

To create a `Duration` instance, you can pass in a number and a `TimeUnit` value. For example, let's say you want to represent a duration of 2.5 seconds:

```
val duration = 2.5.seconds
```

You can also perform arithmetic operations with `Duration` instances, such as adding and subtracting them:

```
val duration1 = 2.5.seconds
val duration2 = 1.5.seconds
val totalDuration = duration1 + duration2 // 4.0 seconds
```

To create an `Instant` instance representing the current timestamp, you can use the `kotlin.time.ExperimentalTime` annotation and call the `kotlin.time.Clock.System.now()` function:

```
@ExperimentalTime
val currentTime = Instant.now()
```

You can also perform arithmetic operations with `Instant` instances, such as adding or subtracting a `Duration`:

```
val currentTime = Instant.now()
val futureTime = currentTime + 5.minutes
val pastTime = currentTime - 1.hour
```

You can then use these classes and operations to measure the duration of code execution, wait for a certain amount of time, or perform other time-related tasks in your Kotlin code.