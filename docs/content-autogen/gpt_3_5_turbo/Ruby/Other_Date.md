In Ruby, the `Date` class is used to work with dates. Here are some examples of how to use date in Ruby:

1. To get the current date:

```ruby
require 'date'
today = Date.today
puts today #=> 2022-11-02
```

2. To create a new date:

```ruby
require 'date'
date = Date.new(2022, 11, 2)
puts date #=> 2022-11-02
```

3. To display a formatted date:

```ruby
require 'date'
today = Date.today
puts today.strftime("%d/%m/%Y") #=> 02/11/2022
```

4. To add or subtract days from a date:

```ruby
require 'date'
today = Date.today
new_date = today + 7
puts new_date #=> 2022-11-09

new_date = today - 5
puts new_date #=> 2022-10-28
```

5. To find the difference between two dates:

```ruby
require 'date'
date1 = Date.new(2022, 11, 2)
date2 = Date.new(2022, 11, 9)
difference = date2 - date1
puts difference #=> 7
```

These are just a few examples of how to use date in Ruby. The `Date` class also provides many other methods and options to work with dates.