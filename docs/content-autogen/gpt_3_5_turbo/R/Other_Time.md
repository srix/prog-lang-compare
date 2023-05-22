In R, you can work with time data using the built-in `POSIXct` and `POSIXlt` classes. These classes are used to represent dates and times and provide a variety of functions for working with time data. 

Here are some examples:

1. Creating a `POSIXct` object for the current time.

```
current_time <- Sys.time()
```

2. Creating a `POSIXct` object for a specific date and time.

```
specific_time <- as.POSIXct("2022-06-01 12:30:00", tz = "UTC")
```

3. Converting a `POSIXlt` object to a `POSIXct` object.

```
lt_time <- as.POSIXlt("2022-06-01 12:30:00")
ct_time <- as.POSIXct(lt_time)
```

4. Adding or subtracting time from a `POSIXct` object.

```
new_time <- current_time + 60*60*24 # adds 1 day
```

5. Formatting a `POSIXct` object into a human-readable string.

```
formatted_time <- format(current_time, "%Y-%m-%d %H:%M:%S")
```

6. Extracting specific values from a `POSIXct` object.

```
day_of_week <- weekdays(current_time)
hour_of_day <- as.numeric(format(current_time, "%H"))
```

These are just a few examples of how to work with time data in R. With these classes and functions, you can manipulate, format, and extract information from time data with ease.