In Groovy, the "times" method is used to repeat a block of code a specified number of times. The syntax for using times is as follows:

```groovy
numberOfTimes.times {
    // Code to be repeated
}
```

Here, the `numberOfTimes` can be an integer representing the number of times the code should be repeated.

For example, let's say you want to print "Hello, World!" 5 times. You can do it using the times method:

```groovy
5.times {
    println "Hello, World!"
}
```

This will output:

```
Hello, World!
Hello, World!
Hello, World!
Hello, World!
Hello, World!
```

You can also use the `times` method on a range of values. For example:

```groovy
(1..10).times {
    println it
}
```

This will output the numbers 1 to 10 in separate lines.

```
1
2
3
4
5
6
7
8
9
10
```

You can also use a variable to represent the number of times the code should be repeated:

```groovy
def repeat = 3
repeat.times {
    println "We will be doing this 3 times."
}
```

This will output:

```
We will be doing this 3 times.
We will be doing this 3 times.
We will be doing this 3 times.
```

In summary, the times method in Groovy is a useful tool for repeating a code block a specific number of times or using a range of values.