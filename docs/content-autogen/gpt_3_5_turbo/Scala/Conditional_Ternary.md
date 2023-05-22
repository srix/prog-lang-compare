Ternary expressions in Scala provide a concise way to express conditional statements. The syntax of a ternary expression in Scala is:

`condition ? true-expression : false-expression`

Here, `condition` is the conditional statement which is evaluated to either true or false. `true-expression` is the expression that is returned if the `condition` evaluates to true, and `false-expression` is the expression that is returned if the `condition` evaluates to false.

Here are a few examples of using ternary expressions in Scala:

Example 1: 

```scala
val a = 10
val b = 20
val result = if(a > b) "a is greater than b" else "b is greater than a"
println(result)
```

Output: `b is greater than a`

Here, `if(a > b) "a is greater than b" else "b is greater than a"` is the ternary expression. If `a > b` is true, then the value `"a is greater than b"` is assigned to the `result` variable, otherwise `"b is greater than a"` is assigned to it.

Example 2: 

```scala
val marks = 75
val result = marks match {
  case x if x >= 60 => "Pass"
  case _ => "Fail"
}
println(result)
```

Output: `Pass`

Here, `marks match { case x if x >= 60 => "Pass"; case _ => "Fail" }` is the ternary expression. If `marks` is greater than or equal to `60`, then the value `"Pass"` is assigned to the `result` variable, otherwise `"Fail"` is assigned to it. The `match` expression is used to pattern-match the `marks` variable against different cases. 

These are some examples of how to use ternary expressions in Scala. They provide a concise way of expressing conditional statements and can make the code more readable and efficient.