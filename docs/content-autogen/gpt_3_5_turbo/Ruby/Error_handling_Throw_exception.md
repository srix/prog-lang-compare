In Ruby, we can throw an exception to signal that an error has occurred during the execution of a program. Here are some examples of how to throw an exception in Ruby:

1. Using the `raise` method:
```
raise "Something went wrong."
```
This will throw a `RuntimeError` with the message "Something went wrong."

2. Specifying the type of exception to throw:
```
raise TypeError, "Invalid argument supplied."
```
This will throw a `TypeError` with the message "Invalid argument supplied."

3. Creating a custom exception:
```
class MyCustomException < StandardError
  def initialize(msg="My custom exception occurred.")
    super
  end
end

raise MyCustomException.new("Oops!")
```
This will throw a `MyCustomException` with the message "Oops!"

4. Using the `fail` method:
```
fail "It failed."
```
This is equivalent to using `raise` and will throw a `RuntimeError` with the message "It failed."

5. Raising an exception inside a rescue block:
```
begin
  # Some code that might raise an exception.
rescue => e
  raise "An exception occurred: #{e.message}" 
end
```
This will catch any exception that occurs in the `begin` block and throw a new `RuntimeError` with a new message that includes the original exception's message.