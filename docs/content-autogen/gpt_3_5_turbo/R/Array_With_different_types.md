In R, it is possible to create an array with different data types. Here are two ways to do it:

1. Using the "list" function:

The "list" function allows us to create an R object that can store different data types. To create an array with different data types using the list function, we first create a list of all the elements, and then convert the list into an array using the "as.array" function. Here is an example:

```
my_list <- list("hello", 5, TRUE, 3.14)
my_array <- as.array(my_list)
```

In this example, "my_list" is a list with four elements, each of a different data type. We then convert it to an array using the "as.array" function.

2. Using the "data.frame" function:

The "data.frame" function allows us to create a table-like data structure where each column can be of a different data type. We can convert this data frame into an array using the "as.matrix" function. Here is an example:

```
my_data <- data.frame(Name = c("John", "Alice", "Bob"), Age = c(23, 35, 28), Married = c(FALSE, TRUE, TRUE))
my_array <- as.array(as.matrix(my_data))
```

In this example, "my_data" is a data frame with three columns, each of a different data type. We then convert it to a matrix using the "as.matrix" function and then to an array using the "as.array" function.