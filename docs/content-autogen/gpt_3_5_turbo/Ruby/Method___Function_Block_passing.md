Block passing in Ruby refers to the ability to pass a block of code as a parameter to a method. This can be useful when you want to perform some customization of behavior within the method without having to duplicate its code.

Here's an example of block passing in Ruby:

```
def with_customization
  yield("Hello")
end

with_customization { |greeting| puts "#{greeting}, world!" }
```

In the example above, we define a method called `with_customization` that takes a block of code as a parameter and calls it with the string "Hello" as an argument using the `yield` keyword. We then call `with_customization` and pass in a block of code that takes the greeting argument and prints it out with ", world!" appended to it. The output of this code will be:

```
Hello, world!
```

One practical use case for block passing in Ruby is when working with iterators. For example, the `each` method on an Array object takes a block argument that is called once for each element in the array:

```
[1, 2, 3].each { |x| puts x * 2 }
```

In this code, we call the `each` method on an array of integers and pass in a block of code that multiplies each element by 2 and prints it out. The output of this code will be:

```
2
4
6
```

Using block passing in Ruby can make your code more flexible and dynamic by allowing you to customize behavior for specific use cases without having to modify the underlying method.