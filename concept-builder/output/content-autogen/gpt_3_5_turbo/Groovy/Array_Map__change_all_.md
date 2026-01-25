To change all the elements of an array in Groovy, you can loop through the array and update each element. Here's an example:

```
def nums = [1, 2, 3, 4, 5]
nums.eachWithIndex { num, index ->
    nums[index] = num * 2
}
println nums // output: [2, 4, 6, 8, 10]
```

In this example, we first define an array of numbers `nums`. We then use the `eachWithIndex` method to loop through the array, which allows us to access both the current element (`num`) and its index (`index`). We then update each element in the array by multiplying it by 2 and assigning it back to the same index.

Alternatively, you can also use the `collect` method to create a new array with the updated values:

```
def nums = [1, 2, 3, 4, 5]
def doubled = nums.collect { num -> num * 2 }
println doubled // output: [2, 4, 6, 8, 10]
```

In this example, we use the `collect` method to create a new array `doubled` with the updated values. The `collect` method loops through each element of the array and applies the specified closure (which multiplies the value by 2) to each element, creating a new array of the resulting values.