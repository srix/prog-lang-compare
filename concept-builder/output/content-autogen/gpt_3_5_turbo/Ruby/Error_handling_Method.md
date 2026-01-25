In Ruby, the `begin..rescue..end` block is used for exception handling. It is similar to a `try/catch/finally` block in other programming languages. Here's an example of a method that uses `begin..rescue..end` block for error handling:

```
def divide_by(a, b)
  begin
    result = a / b
  rescue ZeroDivisionError => error
    puts "Error: #{error}"
    result = nil
  ensure
    puts "Result: #{result}"
  end
  return result
end
```
In the above example, the `begin` keyword starts the block. The `rescue` keyword defines the specific type (in this case `ZeroDivisionError`) of exception that we want to handle, and gives a name (`error`) for the instance of the exception. The `ensure` block is always executed, either after the `begin` block or after the `rescue` block, regardless of whether an exception occurred or not.

Here’s an example that demonstrates how to trigger an error by calling the `divide_by` method:

```
puts divide_by(10, 0)
```
This will output:

```
Error: divided by 0
Result: nil
nil
```
In this example, the `rescue` block is executed, and the message "Error: divided by 0" is printed, because we tried to divide 10 by 0. The `ensure` block is also executed, and it prints the result of `result`, which is `nil`.

If we call the same method with valid arguments, it should return the correct result:

```
puts divide_by(10, 2)
```
This will output:

```
Result: 5
5
```
Here, since there are no exceptions, the `ensure` block is still executed, and it prints the result of `result`, which is `5`.