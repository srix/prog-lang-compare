In Kotlin, a Boolean is a primitive data type that represents a logical value. A boolean variable can have two possible values: true or false.

Here are some examples of using Boolean values in Kotlin:

1. Declaring a Boolean variable:

```kotlin
var isSunny = true
```

2. Comparing Boolean values:

```kotlin
val a = true
val b = false
val result = a == b // false
```

3. Using Boolean expressions:

```kotlin
val x = 10
val y = 5
val z = x > y && y < 20 // true
```

4. Using Boolean operators:

```kotlin
val p = true
val q = false
val r = true

val result1 = p && q // false
val result2 = p || q // true
val result3 = !p // false
val result4 = p && q || r // true
```

In the above code, "&&" represents the logical AND operation, "||" represents the logical OR operation, and "!" represents the logical NOT operation.

Overall, Booleans are a powerful tool for evaluating logical conditions and making decisions based on their results.