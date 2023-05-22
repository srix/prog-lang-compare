In Scala, `not` is represented by the `!` symbol. It is a unary operator, which means that it operates on a single Boolean value and it returns the inverse of that value.

Here are some examples of how to use `not` in Scala:

1. Using not with a Boolean variable:

```
val isSunny = true
val isNotSunny = !isSunny // isNotSunny is false
```

2. Using not with an equality operator:

```
val a = 5
val b = 7
val isNotEqual = !(a == b) // isNotEqual is true
```

3. Using not with a logical `and` operator:

```
val isSunny = true
val isWarm = false
val isNotSunnyAndWarm = !(isSunny && isWarm) // isNotSunnyAndWarm is true
```

4. Using not with a logical `or` operator:

```
val isSunny = false
val isWarm = true
val isNotSunnyOrWarm = !(isSunny || isWarm) // isNotSunnyOrWarm is false
```