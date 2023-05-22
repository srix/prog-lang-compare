In Ruby, we can use the `respond_to?` method to check if a class has a certain method. `respond_to?` returns `true` if the object can respond to the message and `false` otherwise.

Here's an example of how to use `respond_to?`:

```ruby
class Person
  def name
    puts "John"
  end
end

person = Person.new

# Check if the person object has a method named "name"
if person.respond_to?("name")
  person.name
else
  puts "Method not found"
end
```

In this example, we created a `Person` class with a `name` method. We then created a `person` object and checked if it has a method named "name" using `respond_to?`. Since the `person` object has a `name` method, we output "John".

We could also use the shorthand version of `respond_to?` by passing a symbol of the method name:

```ruby
if person.respond_to?(:name)
  person.name
else
  puts "Method not found"
end
```

This does the same thing as the previous code block, but uses a symbol instead of a string in the argument to `respond_to?`.