In Python, the `break` statement is used to terminate a loop prematurely. When the `break` statement is executed inside a loop block, the control is immediately transferred to the statement that follows the loop block. Here are some examples of using the `break` statement in Python 3.10:

1. Using `break` in a for loop:

```
fruits = ["apple", "banana", "cherry", "orange", "pineapple"]
for fruit in fruits:
    if fruit == "cherry":
        break
    print(fruit)
```

Output:
```
apple
banana
```
In this example, we iterate through a list of fruits and break the loop when we encounter the fruit "cherry". The output will display all the fruits up to the point where the loop was broken.

2. Using `break` in a while loop:

```
i = 1
while i < 6:
    if i == 4:
        break
    print(i)
    i += 1
```

Output:
```
1
2
3
```

In this example, we use a while loop to print numbers from 1 to 5, but we break the loop when the value of `i` is equal to 4. The output will display all the numbers up to the point where the loop was broken.

In summary, the `break` statement is a powerful tool in Python that allows you to terminate a loop prematurely, saving you time and effort that would have been wasted on unnecessary code execution.