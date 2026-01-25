To count the number of elements in an array matching a condition in Groovy, you can use the `count` method along with a closure that defines the condition to be matched. 

Here's an example:

```
def nums = [1, 2, 3, 4, 5]
def count = nums.count { num -> num % 2 == 0 }
println count
```

In this example, we create an array `nums` with five integers. We define a closure that checks whether a number is even or not by looking at its remainder after division by 2. We call the `count` method on the `nums` array, passing the closure as an argument. The `count` method returns the number of elements in the array that fulfill the condition defined in the closure.

In this case, the output will be `2`, since only two elements in the `nums` array are even. 

You can modify the condition in the closure to check for other conditions. For example, to count the number of elements in an array that are greater than a certain value, you could write:

```
def nums = [1, 2, 3, 4, 5]
def count = nums.count { num -> num > 3 }
println count
```

In this case, the condition checks whether the number is greater than 3. The output will be `2`, since there are two elements in the `nums` array that are greater than 3.