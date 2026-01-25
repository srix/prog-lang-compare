In Python 3.10, the `until` keyword is used in conjunction with the `while` keyword to create a loop that continues until a certain condition is met. Here's the syntax:

```
while not condition:
    # block of code to be executed repeatedly
    # until the 'condition' evaluates to 'True'
    pass
else:
    # block of code to be executed after the loop
    # has completed without a 'break' statement
    pass
```

Here's an example to demonstrate the usage of `until` keyword in a `while` loop:

```python
# using until with while loop
n = 0
while not (n == 5):
    print(n)
    n += 1
else:
    print("Loop is completed without a 'break' statement")

print("End of program")
```

Output:
```
0
1
2
3
4
Loop is completed without a 'break' statement
End of program
```

In this example, the `while` loop iterates until `n` becomes 5. The `until` keyword is used to negate the condition, which means that the loop will continue executing until the condition becomes `True`. The `else` block is executed after the loop completes without encountering a `break` statement.