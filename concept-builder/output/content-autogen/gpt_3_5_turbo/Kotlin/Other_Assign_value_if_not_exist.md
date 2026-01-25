In Kotlin, you can assign a value to a variable only if it does not exist or is null using the Elvis operator. The Elvis operator is represented by "?:" and it works by returning the value on its left if it is not null, otherwise it returns the value on its right.

Here is an example:

```
val x: String? = null
val y = x ?: "Hello World"
```

In the example above, we have defined a nullable String variable x which is currently null. We then use the Elvis operator to assign a value to y. Since x is null, the value of y will be "Hello World".

Here is another example where x is not null:

```
val x: String? = "Kotlin is awesome!"
val y = x ?: "Hello World"
```

In this example, x has a value of "Kotlin is awesome!" and therefore the value of y will be assigned to x's value i.e. "Kotlin is awesome!". The Elvis operator is not used in this case.

In summary, the Elvis operator allows you to check if a variable is null and provide a default value in cases when it is null.