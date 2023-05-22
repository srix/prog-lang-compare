In Ruby, we can use various methods and classes to work with time and dates. Here are some examples:

1. `Time.now`: This method returns the current time in the local time zone.

```ruby
current_time = Time.now
puts current_time
# Output: 2021-07-08 14:25:30 +0530
```

2. `Time.new`: We can create a new time object by passing the year, month, day, hour, minute and second as arguments to the `Time.new` method.

```ruby
my_birthday = Time.new(1995, 9, 15) # year, month, day
puts my_birthday
# Output: 1995-09-15 00:00:00 +0530

my_time = Time.new(2021, 7, 8, 14, 30, 0) # year, month, day, hour, minute, second
puts my_time
# Output: 2021-07-08 14:30:00 +0530
```

3. `Time.parse`: This method converts a string representation of time to a Time object.

```ruby
require 'time'
my_time = Time.parse('2021-07-08 14:30:00')
puts my_time
# Output: 2021-07-08 14:30:00 +0530
```

4. `strftime`: This method formats a Time object as a string based on the given format.

```ruby
my_time = Time.new(2021, 7, 8, 14, 30, 0)
puts my_time.strftime("%d/%m/%Y %H:%M:%S")
# Output: 08/07/2021 14:30:00
```

5. `Time.at`: This method creates a Time object from a Unix timestamp.

```ruby
my_unix_time = Time.at(1625737200)
puts my_unix_time
# Output: 2021-07-08 22:20:00 +0530
```

These are just some of the ways we can use time in Ruby. By mastering these methods and using them in the right context, we can write powerful programs that manipulate time and date data.