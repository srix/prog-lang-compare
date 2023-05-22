In Ruby, block binding is used to create a new block-local variable that is accessible only within the block in which it’s defined. This helps prevent the variable from unintentionally conflicting with similarly named variables in other parts of the code.

To use block binding in Ruby, you can use the `begin` and `end` keywords to define the block. Within this block, you can use the `|variable|` syntax to define the new block-local variable. Here's an example:

```ruby
def print_twice(array)
   array.each do |num|
      begin
         x = num * 2
         puts x
      end
   end
end
```

In this example, the `begin` and `end` keywords define a block, and the `|num|` syntax creates the block-local variable `num`. Within this block, we perform some calculations with `num` to double it, and then print it twice.

Another example using block binding in Ruby is:

```ruby
array = [1, 2, 3]

array.each do |i ; square|
  square = i * i
  puts square
end
```

In this example, the variable `square` is declared with `;` in the block parameter list, as a separated block-local variable. When the block is executed, each element in the array is multiplied by itself and each result is stored in the `square` variable. The `puts` method then prints out each value of `square`.

Overall, block binding helps you define variables within blocks that are unique to that block, which helps prevent conflicts and improve the readability of your code.