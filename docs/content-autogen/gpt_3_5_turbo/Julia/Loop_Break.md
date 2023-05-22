In Julia, the `break` statement is used to exit from a loop prematurely. 

Here is a basic example of `break` statement used inside a `for` loop:

```julia
for i in 1:5
    if i == 3
        break
    end
    println(i)
end
```

Output:
```
1
2
```

In the above example, the `for` loop iterates from 1 to 5. However, when `i` becomes 3, the `if` condition is satisfied and the `break` statement is executed, causing the loop to terminate early.

Similarly, the `break` statement can also be used inside a `while` loop to exit prematurely. Here's an example:

```julia
i = 1
while true
    if i == 3
        break
    end
    println(i)
    i += 1
end
```

Output:
```
1
2
```

In the above example, the `while` loop runs infinitely until the `if` condition is satisfied and the `break` statement causes the loop to terminate. 

It is worth noting that the `break` statement only terminates the innermost loop in which it is used. If `break` is used in a nested loop, it only terminates the loop in which it is used, while the outer loop(s) continue to run.