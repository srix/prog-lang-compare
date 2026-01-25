In R, a hash can be created using the `hash` package. Here is an example code to create a hash with a few key-value pairs:

``` r
# Install and load the hash package
install.packages("hash")
library(hash)

# Create a hash and add key-value pairs
my_hash <- hash()
my_hash[["name"]] <- "John"
my_hash[["age"]] <- 30
my_hash[["gender"]] <- "Male"

# Print the hash
my_hash
```

Output:

``` r
## <hash> containing 3 key-value pair(s).
##   name : John
##   age : 30
##   gender : Male
```

Another example of creating a hash using named arguments is shown below:

``` r
# Create a hash using named arguments and add key-value pairs
my_hash <- hash(name = "John", age = 30, gender = "Male")

# Print the hash
my_hash
```

Output:

``` r
## <hash> containing 3 key-value pair(s).
##   name : John
##   age : 30
##   gender : Male
```

Note that in these examples, we used the `[[` operator to add and retrieve values from the hash. We can also use the `$` operator to access the values of the hash. For example:

``` r
# Access the value of the name key using `$` operator
my_hash$name
```

Output:

``` r
## [1] "John"
```

Overall, the `hash` package provides a convenient and flexible way of working with hashes in R.