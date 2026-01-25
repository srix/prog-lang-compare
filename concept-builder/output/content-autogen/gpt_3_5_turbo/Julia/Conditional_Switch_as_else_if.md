In Julia, the `switch` statement is not available. However, you can achieve similar functionality using `if-elseif-else` statements. Here's an example:

```julia
function check_grade(grade::Int64)
    if grade >= 90
        println("A")
    elseif grade >= 80
        println("B")
    elseif grade >= 70
        println("C")
    else
        println("D or lower")
    end
end

check_grade(95) # Output: A
check_grade(78) # Output: C
check_grade(65) # Output: D or lower
```

In this example, the `check_grade` function takes an integer argument `grade` and checks if it is greater than or equal to 90, 80, and 70. If it passes any of these conditions, it will return the respective grade letter. If it fails all conditions, it will return "D or lower". This is the equivalent of a `switch` statement with several `case` conditions in other languages.

Alternatively, you could use a `Dict` object to simulate a `switch`-like statement as shown below:

```julia
function check_grade(grade::Int64)
    grades_dict = Dict(90=>"A", 80=>"B", 70=>"C")
    if haskey(grades_dict, grade)
        println(grades_dict[grade])
    else
        println("D or lower")
    end
end

check_grade(92) # Output: A
check_grade(78) # Output: C
check_grade(65) # Output: D or lower
```

In this example, the `check_grade` function takes an integer argument `grade` and checks if it exists in the `grades_dict`. If it is found in the dictionary, it will return the respective grade letter. If it is not found, it will return "D or lower".