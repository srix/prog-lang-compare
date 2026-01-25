In Lua, the `os.date()` function is used for outputting date and time in a user-defined format. Here's an example of how to use it:

```lua
-- to output the current date in the format year-month-day
print(os.date("%Y-%m-%d"))

-- to output the current time in the format hour:minute:second
print(os.date("%H:%M:%S"))

-- to output the current date and time in the format year/month/day hour:minute:second
print(os.date("%Y/%m/%d %H:%M:%S"))

-- to convert a Unix timestamp to the date and time format
print(os.date("%Y-%m-%d %H:%M:%S", 1633229613))
```

The output of the first three examples will change depending on the current date and time on the system running the script.

In the last example, `1633229613` is a Unix timestamp, which is the number of seconds elapsed since January 1, 1970, 00:00:00 UTC. You can substitute any valid Unix timestamp for this value to get the corresponding date and time output in the desired format.