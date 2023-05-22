In Julia, a field in a class is a variable that belongs to the class and can hold any value or data structure. Fields are defined using the `struct` keyword and assigned values using the constructor of the class.

Here is an example of a simple class with three fields:

```julia
struct Person
    name::String
    age::Int64
    address::String
end
```

In this class, `name`, `age`, and `address` are the fields. To create an instance of this class, we can use the constructor like this:

```julia
person1 = Person("John", 25, "123 Main St.")
```

We can access the fields of `person1` using dot notation like this:

```julia
println(person1.name)      # Output: John
println(person1.age)       # Output: 25
println(person1.address)   # Output: 123 Main St.
```

We can also change the value of a field using the dot notation:

```julia
person1.address = "456 Park Ave."
println(person1.address)   # Output: 456 Park Ave.
```

Fields can also hold more complex data structures, like arrays or dictionaries:

```julia
struct Student
    name::String
    age::Int64
    grades::Dict{String, Int64}
end

student1 = Student("Alice", 18, Dict("Math" => 95, "English" => 85))
println(student1.grades["Math"])     # Output: 95
student1.grades["Science"] = 90
println(student1.grades["Science"])  # Output: 90
```