In MATLAB, the time can be treated as a numerical data type using the built-in `datetime` function. The `datetime` function constructs arrays of date and time values that can be used in various arithmetic operations such as addition, subtraction, multiplication, and division.

Here are some examples of how to use time in MATLAB:

1. Creating a datetime array:

```matlab
datetime_array = datetime('now', 'TimeZone', 'local', 'Format', 'dd-MMM-yyyy HH:mm:ss');
```

This creates a datetime array containing the current time value in the local time zone.

2. Adding time to a datetime array:

```matlab
new_date = datetime_array + hours(24);
```

This adds 24 hours to each value in the `datetime_array`.

3. Subtracting time from a datetime array:

```matlab
new_date = datetime_array - minutes(30);
```

This subtracts 30 minutes from each value in the `datetime_array`.

4. Converting a datetime array to a string:

```matlab
string_date = datestr(datetime_array, 'dd-MMM-yyyy HH:mm:ss');
```

This converts a `datetime_array` into a string using the specified format.

5. Converting a string to a datetime array:

```matlab
datetime_array = datetime('23/06/2021 11:30:00', 'InputFormat', 'dd/MM/yyyy HH:mm:ss');
```

This creates a datetime array from a string with a specified format.

6. Time difference calculation:

```matlab
start_time = datetime('2021-06-23 10:00:00');
end_time = datetime('2021-06-23 11:30:00');
time_diff = end_time - start_time;
```

This calculates the time difference between two datetime values.

These are some basic examples of how to use time in MATLAB. Depending on the requirements, there are many other ways to use time in MATLAB such as plotting time series data, date filtering, and time manipulation functions.