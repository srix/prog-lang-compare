Using times in Lua is relatively easy. In Lua, there are two primary ways to represent times: as a number of seconds since Unix epoch (January 1, 1970), or as a table with separate fields for year, month, day, hour, minute, and second.

Here are some examples to demonstrate how to use times in Lua:

1. To get the current time as a number of seconds since Unix epoch, use the `os.time()` function:

```lua
local current_time = os.time()
print(current_time)
```

This will output the current time in seconds since Unix epoch, such as `1614736029`.

2. To convert a table representing a time to a number of seconds since Unix epoch, use the `os.time()` function with the table as an argument:

```lua
local my_time = {year=2021, month=3, day=3, hour=10, min=30, sec=0}
local seconds_since_epoch = os.time(my_time)
print(seconds_since_epoch)
```

This will output `1614757800`, which is the number of seconds since Unix epoch equivalent to March 3, 2021 at 10:30:00 AM.

3. To convert a number of seconds since Unix epoch to a table representing the time, use the `os.date()` function:

```lua
local my_time = os.date("*t", 1614757800)
print(my_time.year, my_time.month, my_time.day, my_time.hour, my_time.min, my_time.sec)
```

This will output `2021, 3, 3, 10, 30, 0`, which is the year, month, day, hour, minute, and second of the time represented by `1614757800`.

Note that the `os.date()` function returns a table with separate fields for year, month, day, hour, minute, and second. The `*t` argument tells `os.date()` to return this table representation of the time.

These are just a few examples of how to use times in Lua. There are many other functions and features available for working with times, including time zone conversions and date formatting.