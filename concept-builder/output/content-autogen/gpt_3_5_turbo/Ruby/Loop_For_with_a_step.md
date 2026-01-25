In Ruby, "for" is a keyword that is used for looping or iterating over a collection. Here's how you can use "for" with a step:

1. Syntax:

```
for i in (start..end).step(step_value)
  # code block
end
```

2. Example:

```
for i in (1..10).step(2)
  puts i
end
```

Output: 
```
1
3
5
7
9
```

In the above example, we are iterating over the range (1..10) and stepping through it by two values at a time. Therefore, the output displays the elements of the range from 1 to 10 with a step of 2.

Note: You can replace the (start..end) range with an array or any other collection that you want to iterate over.