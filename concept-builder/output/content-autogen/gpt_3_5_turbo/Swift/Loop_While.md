In Swift, `while` is a loop statement. You use it when you need to repeat a set of statements a few times, but you don't know how many times you need to execute them beforehand. The syntax for `while` loop in Swift is as follows:

```
while condition {
   // statements to execute while condition is true
}
```

The `condition` is an expression that is evaluated before each iteration of the loop. If the `condition` is true, the statements inside the loop will be executed. This will continue until the `condition` becomes false. Here's an example of using `while` in Swift.

```
var i = 0
while i < 5 {
    print(i)
    i += 1
}
```

In this example, the `while` loop will execute until `i` is less than 5. Inside the loop, `print(i)` will output the value of `i`. Then `i` is incremented by 1 each time the loop iterates. Here's the output of this code:
```
0
1
2
3
4
```

You can also use `while` loop with a Boolean value. Here's an example:

```
var isHappy = true
while isHappy {
    print("I'm happy!")
    isHappy = false // set the condition to false to exit the loop
}
```

In this example, as long as the `isHappy` variable is `true`, the statement inside the loop will be executed. Here, it will print `"I'm happy!"` once. The loop will exit afterward because we set `isHappy` to `false`.