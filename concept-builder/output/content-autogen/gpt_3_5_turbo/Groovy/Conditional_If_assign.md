In Groovy, "if" statements are used to execute a block of code based on a specific condition. The "if" statement can be used in conjunction with assignment to assign a specific value or object to a variable based on the condition.

Here's an example:

```
def score = 85
def grade

if (score >= 90) {
    grade = 'A'
} else if (score >= 80) {
    grade = 'B'
} else if (score >= 70) {
    grade = 'C'
} else {
    grade = 'D'
}

println "Your grade is $grade"
```

In the example above, we have a variable named `score` that contains the value `85`. We also have a variable named `grade` that we want to assign based on the value of `score`.

We use the "if" statement to check if `score` is greater than or equal to `90`. If it is, we assign the value `"A"` to `grade`.

If `score` is not greater than or equal to `90`, we move on to the next "if" statement and check if `score` is greater than or equal to `80`. If it is, we assign the value `"B"` to `grade`.

We continue this pattern until we reach the final "else" statement. If none of the previous conditions were met, we assign the value `"D"` to `grade`.

Finally, we print out the value of `grade`, which in this case is `"B"`.