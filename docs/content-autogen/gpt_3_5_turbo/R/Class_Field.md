In R, fields refer to variables that belong to a class object. They are attributes that store information about the object, and their values can be accessed or modified using the $ or @ operator.

Here is an example class in R that contains fields:

```
# Create a class called Person
Person <- setClass("Person",
                   slots = list(name = "character",
                                age = "numeric"))

# Create an instance of the class
person1 <- Person(name = "John Doe", age = 30)

# Access fields using the $ or @ operator
person1$name   # "John Doe"
person1$age    # 30

# Modify fields using the $ or @ operator
person1$name <- "Jane Doe"
person1$name   # "Jane Doe"
```

In the example above, we created a class called Person with two fields: name and age. We then created an instance of the class called person1, and set the values of its fields to "John Doe" and 30. We then accessed the values of its fields using the $ operator (e.g. person1$name), and modified the value of its name field using the $ operator (e.g. person1$name <- "Jane Doe"). 

Note that in the code above, we used the setClass function to define the class and its fields. The slots argument specifies the fields of the class, and their corresponding data types. For example, "character" specifies that the name field is a character string, and "numeric" specifies that the age field is a numeric value.

In summary, fields in R classes are variables that store information about objects, and can be accessed or modified using the $ or @ operator.