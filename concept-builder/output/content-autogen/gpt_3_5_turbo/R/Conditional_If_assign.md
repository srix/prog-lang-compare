In R, we can use "ifelse" statement to assign values to a variable based on certain conditions.

The syntax for ifelse is as follows:

```
ifelse(test, yes, no)
```

* **test**: A logical expression to be evaluated
* **yes**: Value to be assigned if the condition in test is TRUE
* **no**: Value to be assigned if the condition in test is FALSE

Here's an example of how to use ifelse:

```R
x <- c(1, 2, 3, 4, 5)
y <- ifelse(x < 3, "Small", "Big")
print(y)
```

In this example, we create a vector x containing the numbers 1 through 5. We then use ifelse to create a new vector y with the same length as x. The condition we test for is whether each element in x is less than 3. If the condition is true, the corresponding element in y is assigned the value "Small". If the condition is false, the corresponding element in y is assigned the value "Big".

The output of the code is:

```
[1] "Small" "Small" "Big"   "Big"   "Big"  
``` 

This shows that the first two elements in x are less than 3, so their corresponding values in y are "Small". The remaining elements in x are greater than or equal to 3, so their corresponding values in y are "Big".