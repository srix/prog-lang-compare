In Julia, the `typeof()` function is used to get the type of an object. Here are some examples:

1. Getting the type of an integer:

```
x = 5
typeof(x)  # Output: Int64
```

2. Getting the type of a floating point number:

```
y = 3.14
typeof(y)  # Output: Float64
```

3. Getting the type of a string:

```
z = "Hello, world!"
typeof(z)  # Output: String
```

4. Getting the type of an array:

```
A = [1, 2, 3]
typeof(A)  # Output: Array{Int64,1}
```

5. Getting the type of a user-defined struct:

```
struct Person
    name::String
    age::Int
end

p = Person("John", 30)
typeof(p)  # Output: Person
```