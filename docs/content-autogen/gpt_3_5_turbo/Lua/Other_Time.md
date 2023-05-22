In Lua, you can use the built-in `os.time()` function to return the current time in number format.

Example:

```
current_time = os.time()
print(current_time)
```

This will return the amount of seconds that have passed since January 1, 1970. 

You can also use the `os.date()` function to convert the `os.time()` value into a human-readable date and time format. 

Example:

```
specific_time = os.time{year=2021, month=9, day=22, hour=12, min=30, sec=0}
formatted_time = os.date("%Y-%m-%d %H:%M:%S", specific_time)
print(formatted_time)
```

This will print `2021-09-22 12:30:00`, which is the specific date and time that was specified in the `os.time()` function.

You can also use the `os.difftime()` function to calculate the difference between two times in seconds.

Example:

```
start_time = os.time()
-- do some work here
end_time = os.time()
elapsed_time = os.difftime(end_time, start_time)
print("Elapsed time: "..elapsed_time.." seconds")
```

This will print the amount of time that elapsed between the `start_time` and `end_time` values in seconds.