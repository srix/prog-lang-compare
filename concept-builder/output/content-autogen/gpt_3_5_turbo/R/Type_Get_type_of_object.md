In R, you can use the `class()` function to get the type of an object. Here are some examples:

1. Getting the type of a numeric object:

```
x <- 5
class(x)
```

Output: `"numeric"`

2. Getting the type of a character object:

```
y <- "hello"
class(y)
```

Output: `"character"`

3. Getting the type of a logical object:

```
z <- TRUE
class(z)
```

Output: `"logical"`

4. Getting the type of a function object:

```
f <- function(x) { x^2 }
class(f)
```

Output: `"function"`

5. Getting the type of a data frame object:

```
df <- data.frame(x=1:5, y=c("a", "b", "c", "d", "e"))
class(df)
```

Output: `"data.frame"`