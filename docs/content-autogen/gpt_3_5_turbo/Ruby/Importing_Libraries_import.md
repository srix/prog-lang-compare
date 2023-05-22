In Ruby, libraries are called gems, and they can be easily imported into your project using the `require` method. Here's an example code block in Ruby:

```ruby
# This example imports the 'json' gem to parse JSON data
require 'json'

json_string = '{"example": "data"}'
parsed_json = JSON.parse(json_string)

puts parsed_json['example']
```

In this example, we're importing the `json` gem using `require` and then using its `parse` method to convert a JSON string into a Ruby hash. Finally, we print the value of a key in the hash.

You can also conditionally require gems based on the version of Ruby being used, like so:

```ruby
# This example conditionally requires the 'fiber' gem for Ruby 1.9 and earlier
if RUBY_VERSION.split('.')[1].to_i < 9
  require 'fiber'
end

# Use the Fiber gem if it was successfully required
if defined?(Fiber)
  fiber = Fiber.new { puts "Hello from Fiber!" }
  fiber.resume
else
  puts "Fibers not supported on this version of Ruby."
end
``` 

In this example, we're checking if the version of Ruby being used is lower than 1.9, and if so, we're importing the `fiber` gem using `require`. We then create a new fiber and print a message from it, if fibers are supported on the current version of Ruby. If not, we print a message indicating that fibers are not supported.