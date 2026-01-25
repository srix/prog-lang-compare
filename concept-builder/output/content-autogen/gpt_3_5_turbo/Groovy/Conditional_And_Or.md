In Groovy, `and` and `or` operators can be used to combine multiple conditions in a single statement. 

The `and` operator (`&&`) requires both conditions to be true in order for the statement to be true. 

Example: 

```groovy
def age = 25
def gender = "female"
if (age >= 18 && gender == "female") {
    println("You are a legal adult female.")
}
```

The `or` operator (`||`) requires at least one condition to be true in order for the statement to be true. 

Example: 

```groovy
def age = 17
def gender = "male"
if (age >= 18 || gender == "female") {
    println("You are either a legal adult or a female.")
}
```

Additionally, you can combine both operators in a single statement. 

Example: 

```groovy
def age = 25
def gender = "female"
def student = true
if ((age >= 18 && gender == "female") || student == true) {
    println("You are either a legal adult female or a student.")
}
```