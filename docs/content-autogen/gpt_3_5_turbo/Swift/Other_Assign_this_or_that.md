In Swift, we can use the `if-else` statement to assign values to variables based on a condition. The syntax for this is:

```
if condition {
   variable = value1
} else {
   variable = value2
}
```

Here, if the `condition` is `true`, the `variable` is assigned the value `value1`, otherwise it is assigned `value2`.

For example, suppose we want to assign a value to a variable called `number` based on whether it is even or odd:

```
var number = 10
if number % 2 == 0 {
   number = 0
} else {
   number = 1
}
```

Here, the value of `number` is initially set to `10`. The condition `number % 2 == 0` checks if `number` is even (i.e., divisible by `2`), in which case it is assigned the value `0`. Otherwise, it is assigned the value `1`.

Another way to assign values to variables based on conditions is to use the ternary operator `? :`. The syntax for this is:

```
variable = condition ? value1 : value2
```

Here, if the `condition` is `true`, the `variable` is assigned the value `value1`, otherwise it is assigned `value2`.

For example, suppose we want to assign a value to a variable called `grade` based on the score of a test:

```
var score = 85
var grade = score >= 90 ? "A" : (score >= 80 ? "B" : "C")
```

Here, the value of `score` is `85`. The first condition `score >= 90` checks if `score` is greater than or equal to `90`, in which case `grade` is assigned the value `"A"`. If the first condition is false, the second condition `(score >= 80 ? "B" : "C")` checks if `score` is greater than or equal to `80`, in which case `grade` is assigned the value `"B"`. Otherwise, `grade` is assigned the value `"C"`. In this case, since `score` is `85`, the value of `grade` would be `"B"`.