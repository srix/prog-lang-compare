In Julia, a `struct` is a composite data type that groups together variables with different data types under a single name. Here's an example:

```julia
struct Person
    name::String
    age::Int
    height::Float64
    is_student::Bool
end
```

In this code snippet, we define a `Person` struct with four fields: `name`, `age`, `height`, and `is_student`. Each field is followed by a type annotation that specifies its data type.

Now that we have defined the `Person` struct, we can create instances of it like this:

```julia
person1 = Person("Alice", 25, 1.75, false)
person2 = Person("Bob", 30, 1.85, true)
```

Here, we create two `Person` objects, `person1` and `person2`, by calling the `Person` constructor with the values we want to assign to each field. Notice that we don't explicitly specify the data types when creating objects - Julia infers the types automatically based on the types we specified in the struct definition.

We can access each field of a `Person` object using the `.` operator:

```julia
println(person1.name)
println(person2.is_student)
```

This code will print `"Alice"` and `true`, respectively, since `person1` has `"Alice"` as its name and `person2` is a student (i.e., its `is_student` field is `true`).

We can also define functions that take `Person` objects as arguments or return them as values:

```julia
function can_vote(person::Person)
    if person.age >= 18
        return true
    else
        return false
    end
end

function create_student(name::String, age::Int, height::Float64)
    return Person(name, age, height, true)
end
```

The `can_vote` function takes a `Person` object as its argument and returns `true` if the person is at least 18 years old, and `false` otherwise. The `create_student` function creates a new `Person` object with the `is_student` field set to `true`, and returns it.

Hopefully, this demonstrates how you can use `struct` in Julia.