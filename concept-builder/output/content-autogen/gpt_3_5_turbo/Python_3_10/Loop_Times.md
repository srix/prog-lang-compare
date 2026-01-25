In Python 3.10, you can use the `times` module to work with dates and times. Here are some examples:

1. Import the `times` module:

```python
import times
```

2. Get the current date and time:

```python
now = times.now()
print(now)  # Output: 2021-11-22 14:15:16.798593
```

3. Convert a date string to a `datetime` object:

```python
date_str = '2021-11-22'
date_obj = times.to_universal(date_str)
print(date_obj)  # Output: 2021-11-22 00:00:00
```

4. Convert a `datetime` object to a string:

```python
date_obj = times.to_universal('2021-11-22')
date_str = times.format(date_obj, '%Y-%m-%d %H:%M:%S')
print(date_str)  # Output: 2021-11-22 00:00:00
```

5. Add or subtract days, hours, minutes or seconds to a `datetime` object:

```python
date_obj = times.to_universal('2021-11-22')
tomorrow = times.to_local(times.add(date_obj, days=1))
next_hour = times.to_local(times.subtract(date_obj, hours=-1))
next_minute = times.to_local(times.add(date_obj, minutes=1))
next_second = times.to_local(times.subtract(date_obj, seconds=-1))

print(tomorrow)  # Output: 2021-11-23 00:00:00
print(next_hour)  # Output: 2021-11-22 01:00:00
print(next_minute)  # Output: 2021-11-22 00:01:00
print(next_second)  # Output: 2021-11-22 00:00:01
```

These are just a few examples of what you can do with the `times` module. There are many other functions and options available, so be sure to check the documentation if you need more information.