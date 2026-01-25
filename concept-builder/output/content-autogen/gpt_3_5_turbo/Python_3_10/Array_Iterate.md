In Python 3.10, There are multiple ways to iterate over an array. Some of the most common ways are:

1. Using a for loop to iterate over the elements of the array:

```python
my_array = [1, 2, 3, 4]
for element in my_array:
    print(element)
```

Output:

```
1
2
3
4
```

2. Using the `range()` function to iterate over the indices of the array:

```python
my_array = [1, 2, 3, 4]
for i in range(len(my_array)):
    print(my_array[i])
```

Output:

```
1
2
3
4
```

3. Using the `enumerate()` function to iterate over both the indices and elements of the array:

```python
my_array = [1, 2, 3, 4]
for i, element in enumerate(my_array):
    print(i, element)
```

Output:

```
0 1
1 2
2 3
3 4
```

4. Using a while loop to iterate over the elements of the array:

```python
my_array = [1, 2, 3, 4]
i = 0
while i < len(my_array):
    print(my_array[i])
    i += 1
```

Output:

```
1
2
3
4
```