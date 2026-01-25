To get the first and last element of an array in Python 3.10, you can use indexing and slicing techniques.

To get the first element, you can use the index 0, as shown in the example below:

```
my_array = [10, 20, 30, 40, 50]
first_element = my_array[0]
print(first_element)  # Output: 10
```

To get the last element, you can use the index -1, as shown in the example below:

```
my_array = [10, 20, 30, 40, 50]
last_element = my_array[-1]
print(last_element)  # Output: 50
```

You can also use slicing to get the first and last element of an array. To get the first element, you can use [:1], and to get the last element, you can use [-1:], as shown in the example below:

```
my_array = [10, 20, 30, 40, 50]
first_element = my_array[:1]
print(first_element)  # Output: [10]

last_element = my_array[-1:]
print(last_element)  # Output: [50]
```

Note that the slicing technique returns a new array with only the selected elements. Use the index technique if you want to access individual elements in the original array.