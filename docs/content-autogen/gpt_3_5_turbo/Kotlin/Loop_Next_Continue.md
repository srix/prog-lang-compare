In Kotlin, 'next' and 'continue' statements are used within loops to skip the execution of the current iteration and move onto the next iteration. 

The 'next' statement simply skips the current iteration and goes to the next iteration without executing any further statements within that iteration. 

The 'continue' statement does the same thing as 'next', but it also skips the rest of the current iteration and starts the next iteration from the beginning. 

Here's an example that demonstrates the use of 'next' in Kotlin:

```
for (i in 1..10) {
    if (i == 5) {
        next
    }
    println(i)
}
```

In this example, the loop will run from 1 to 10, but when the value of 'i' is 5, the 'next' statement will skip that iteration and move onto the next iteration. Therefore, the output will be:

```
1
2
3
4
6
7
8
9
10
```

Now, take a look at an example that demonstrates the use of 'continue' in Kotlin:

```
for (i in 1..10) {
    if (i % 2 == 0) {
        continue
    }
    println(i)
}
```

In this example, the loop goes from 1 to 10, but when the value of 'i' is even, the 'continue' statement skips the rest of that iteration and moves onto the next iteration. Therefore, the output will be:

```
1
3
5
7
9
```

So, this is how you can use 'next' and 'continue' statements within loops in Kotlin to skip the execution of the current iteration without breaking out of the loop.