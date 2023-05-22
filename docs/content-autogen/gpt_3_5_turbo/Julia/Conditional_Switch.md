The `switch` statement in Julia allows a user to test a single variable for multiple conditions. It works by evaluating the expression given to it and checking whether it matches any of the cases listed. If a match is found, then the code that corresponds to that case is executed.

Here is the syntax:

```
switch expression
    case value1
        code
    case value2
        code
    ...
    otherwise
        code
end
```

Here are some examples:

Example 1: FizzBuzz

```
for i = 1:100
    if i % 3 == 0 && i % 5 == 0
        println("FizzBuzz")
    elseif i % 3 == 0
        println("Fizz")
    elseif i % 5 == 0
        println("Buzz")
    else
        println(i)
    end
end
```

The above code can be converted into a `switch` statement as follows:

```
for i = 1:100
    switch 
        case i % 3 == 0 && i % 5 == 0
            println("FizzBuzz")
        case i % 3 == 0
            println("Fizz")
        case i % 5 == 0
            println("Buzz")
        otherwise
            println(i)
    end
end
```

Example 2: Converting grades to letter grades

```
function convert_grades(score::Int64)
    switch score
        case 90:100
            return "A"
        case 80:89
            return "B"
        case 70:79
            return "C"
        case 60:69
            return "D"
        otherwise
            return "F"
    end
end
```

The `convert_grades` function takes a integer score and returns the corresponding letter grade using a switch statement. For example, `convert_grades(85)` would return "B".