In Julia, there are several packages that you can use to work with dates. One common package is the `Dates` standard library which provides extensive support for working with dates and times. Here are some examples of working with dates in Julia using the `Dates` package:

**1. Creating a date**

To create a date, you can use the `Date(year, month, day)` constructor. For example, to create a date for January 1st, 2022, you can use the following code:

```
julia> using Dates

julia> date = Date(2022, 1, 1)
2022-01-01
```

**2. Creating a date from a string**

You can also create a date from a string using the `Date()` function and specifying the format of the date string. For example:

```
julia> datestr = "2022-01-01"
"2022-01-01"

julia> date = Date(datestr, "yyyy-mm-dd")
2022-01-01
```

**3. Formatting a date**

You can format a date using the `Dates.format()` function. For example, to format a date as "yyyy-mm-dd", you can use the following code:

```
julia> date = Date(2022, 1, 1)
2022-01-01

julia> formatted_date = Dates.format(date, "yyyy-mm-dd")
"2022-01-01"
```

**4. Adding and subtracting days from a date**

You can add or subtract days from a date using the `+` and `-` operators. For example, to add 7 days to a date, you can use the following code:

```
julia> date = Date(2022, 1, 1)
2022-01-01

julia> new_date = date + Dates.Day(7)
2022-01-08
```

Similarly, to subtract 7 days from a date, you can use the following code:

```
julia> date = Date(2022, 1, 8)
2022-01-08

julia> new_date = date - Dates.Day(7)
2022-01-01
```

These are just some basic examples of how you can work with dates in Julia using the `Dates` package. The package also provides many more features for working with dates, such as working with timezones, parsing dates from different systems, etc.