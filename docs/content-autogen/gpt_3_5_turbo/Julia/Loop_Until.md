In Julia, the keyword `until` is used in conjunction with a loop. The `until` keyword specifies a condition for exiting the loop. The loop will continue running until the condition specified after `until` is `true`. Here is the general syntax for using `until` in a loop:

```
while <condition>
   # code to execute while the condition is true
end

# or 

repeat
   # code to execute until the condition is true
until <condition>
```

Here is an example of a while loop with an until condition:

```
i = 1
while i <= 10
   println(i)
   i += 1
end

# Output: 
# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9
# 10
```

In this example, the while loop will keep running until `i` is greater than 10. Once `i` equals 11, the loop will exit.

Here is an example of a repeat-until loop with an until condition:

```
i = 1
j = 0
repeat
   j += i
   i += 1
until i > 10
println(j)

# Output: 55
```

In this example, the repeat-until loop adds up all the values of `i` from 1 to 10 and stores the result in `j`. The loop stops once `i` is greater than 10.