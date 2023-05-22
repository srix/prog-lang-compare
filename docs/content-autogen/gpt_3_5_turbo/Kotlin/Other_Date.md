Sure, here is a brief explanation on how to use dates in Kotlin with examples:

Kotlin provides a built-in class called `Date` to work with dates. To use it, you first need to import the package `java.util.Date`:

```
import java.util.Date
```

You can then instantiate a `Date` object by simply calling its constructor:

```
val currentDate = Date()
```

This will create a new `Date` object with the current date and time.

You can also create a `Date` object by passing a timestamp (milliseconds since January 1, 1970) to the constructor:

```
val timestamp = 1630477147000
val date = Date(timestamp)
```

This will create a new `Date` object that represents the date and time corresponding to the given timestamp.

Once you have a `Date` object, you can format it into a string using a `SimpleDateFormat` object. For example:

```
val formatter = SimpleDateFormat("yyyy-MM-dd HH:mm:ss")
val formattedDate = formatter.format(currentDate)
println("Current date and time: $formattedDate")
```

This will output something like `Current date and time: 2021-09-01 15:30:00`.

You can also use the `Date` object to perform date arithmetic, such as adding or subtracting days from a date:

```
val calendar = Calendar.getInstance()
calendar.time = currentDate
calendar.add(Calendar.DAY_OF_MONTH, 7)
val futureDate = calendar.time
```

This will add 7 days to the current date and time, resulting in a new `Date` object called `futureDate`.