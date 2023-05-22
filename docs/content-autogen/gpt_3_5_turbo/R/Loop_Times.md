In R, times are used to represent time values without a date component. They are stored in a numeric format as the number of seconds since midnight. Here are some examples of how to work with times in R:

1. Creating a time object:
To create a time object, use the `times` function with the time value in a character string format. For example, to create a time object for 6:30 PM, use:

```
my_time <- times("18:30:00")  # note the 24-hour format
print(my_time)
```

This will output: `[1] 18:30:00`

2. Arithmetic operations with times:
You can perform arithmetic operations with times in R. For example, to add 30 minutes to the above time object, use:

```
add_time <- my_time + 30*60
print(add_time)
```

This will output: `[1] 19:00:00`

3. Formatting times:
You can format time objects to display them in different ways. For example, to display the time as a character string in a specific format, use the `format` function. For example:

```
my_formatted_time <- format(my_time, format="%I:%M %p")
print(my_formatted_time)
```

This will output: `[1] "06:30 PM"`

4. Converting times:
You can convert time objects to other time formats as well. For example, to convert a time object to a date-time object, use the `as.POSIXct` function. For example:

```
my_datetime <- as.POSIXct("2022-03-28 18:30:00", format="%Y-%m-%d %H:%M:%S")
print(my_datetime)
```

This will output: `[1] "2022-03-28 18:30:00 GMT"`.