In Scala, you can use the `java.util.Date` class to work with dates and times. Here are some examples of how to use date in Scala:

1. Import the `java.util.Date` class:

```
import java.util.Date
```

2. Create a new Date object:

```
val today = new Date()
```

3. You can print the date using the `toString()` method:

```
println(today.toString())
```

4. You can also format the date using a SimpleDateFormat object:

```
import java.text.SimpleDateFormat

val dateFormat = new SimpleDateFormat("yyyy-MM-dd")
val dateString = dateFormat.format(today)

println(dateString)
```

This will output the date in the format "YYYY-MM-DD".

5. You can also perform operations on dates, such as adding or subtracting days or minutes:

```
val now = new Date()
val fiveMinutesAgo = new Date(now.getTime() - 5 * 60 * 1000)

println("Now: " + now.toString())
println("Five minutes ago: " + fiveMinutesAgo.toString())
```

This will output the current date and time, as well as the date and time that was 5 minutes ago.

Overall, working with dates in Scala is similar to working with dates in Java, since Scala is built on top of the Java Virtual Machine (JVM).