In Python, `if/else` statements can be used to create conditions and control the flow of the program based on those conditions. Here's an example of how to use if/else in Python 3.10:

```
# Example 1
x = 10

if(x > 5):
    print("x is greater than 5")
else:
    print("x is less than or equal to 5")
    
# Output: "x is greater than 5"
```

In this example, we first initialize a variable `x` to 10. Then we use an if/else statement to check if `x` is greater than 5. If `x` is greater than 5, then the program will output "x is greater than 5." Otherwise, if `x` is less than or equal to 5, the program will output "x is less than or equal to 5."

You can also use if/elif/else statements to create more complex conditions:

```
# Example 2
x = 10
y = 20

if(x > y):
    print("x is greater than y")
elif(x == y):
    print("x and y are equal")
else:
    print("x is less than y")
    
# Output: "x is less than y"
```

In this example, we initialize variables `x` and `y` to 10 and 20, respectively. Then we use an if/elif/else statement to check if `x` is greater than `y`, if `x` is equal to `y`, or if `x` is less than `y`. Since `x` is less than `y`, the statement "x is less than y" will be output.