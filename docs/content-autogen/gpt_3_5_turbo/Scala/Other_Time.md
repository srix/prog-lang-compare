In Scala, time can be measured using a variety of classes and methods. Here are a few examples:

1. System.nanoTime(): This method provides a precise measurement of time in nanoseconds, and is often used for benchmarking and performance testing.

```
val start = System.nanoTime()
// some code to benchmark
val end = System.nanoTime()
val elapsedTime = end - start
println(s"Elapsed time: $elapsedTime ns")
```

2. java.time.Duration: The java.time package in Scala provides classes for measuring time, including a Duration class for representing an amount of time. You can create and manipulate Duration objects using simple arithmetic operations.

```
import java.time._
val start = Instant.now()
// some code to measure
val end = Instant.now()
val elapsedTime = Duration.between(start, end)
println(s"Elapsed time: ${elapsedTime.toMillis} ms")
```

3. Timer object: The Timer class in Scala provides a simple way to schedule tasks at specific intervals.

```
import java.util._
val timer = new Timer()
val task = new TimerTask {
  def run() = println("Timer task executed!")
}
timer.schedule(task, 1000L, 1000L) // schedule task to run every second
```

4. System.currentTimeMillis(): This method provides the current time in milliseconds since the Unix epoch (January 1, 1970 UTC), and can be used for simple timing tasks.

```
val start = System.currentTimeMillis()
// some code to time
val end = System.currentTimeMillis()
val elapsedTime = end - start
println(s"Elapsed time: $elapsedTime ms")
```