To count the number of elements in an array matching a condition R, we can follow the following steps:

1. Initialize a variable `count` to 0, which will keep track of the number of elements that match the condition R.

2. Use a loop to go through each element in the array.

3. Check if the element satisfies the condition R using an `if` statement.

4. If the condition is satisfied, increment the `count` variable by 1.

5. Repeat steps 3-4 for each element in the array.

6. Once the loop finishes, the `count` variable will contain the number of elements that match the condition R.

Here's an example code snippet in Python that counts the number of elements in an array that are greater than 5:

```python
array = [2, 6, 8, 3, 9, 1, 4, 7]
count = 0

for element in array:
    if element > 5:
        count += 1

print("Number of elements greater than 5:", count)
```

Output:
```
Number of elements greater than 5: 4
``` 

In this example, we first define an array `array` with 8 elements. We then initialize the variable `count` to 0. We use a loop to go through each element in the array, and check if the element is greater than 5. If it is, we increment `count` by 1. Once the loop is done, we print the value of `count`, which tells us how many elements in the array are greater than 5. In this case, the output is 4, since there are 4 elements in the array that are greater than 5.