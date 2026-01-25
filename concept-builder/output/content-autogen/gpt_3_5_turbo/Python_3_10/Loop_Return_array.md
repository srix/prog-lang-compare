In Python, you can use the 'return' statement to return an array from a function. Here is an example function that returns an array:

```
def return_array():
    my_array = [1, 2, 3, 4, 5]
    return my_array
```

In this function, we create an array called 'my_array' with the values 1 through 5. We then use the 'return' statement to return this array from the function. Here is an example of how to call this function:

```
my_list = return_array()
print(my_list)
```

When we call the 'return_array' function and assign the result to the variable 'my_list'. The code then prints the value of 'my_list', which is the array that was returned by the function.

Output:
```
[1, 2, 3, 4, 5]
```

Another example of returning an array from a function in Python 3.10:

```
def get_numbers():
    numbers = [6, 7, 8, 9, 10]
    return numbers
 
 
print(get_numbers())
```

In this example function, we create an array called 'numbers' with the values 6 through 10. We then use the 'return' statement to return this array from the function. When we call the function and print the result, we get the output as:

Output:
```
[6, 7, 8, 9, 10]
```