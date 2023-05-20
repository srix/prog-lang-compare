In Python, we can use the `index()` method to get the index of a particular element in an array. The syntax is:
```python
<list>.index(<element>)
```
Here, `<list>` is the name of the array, and `<element>` is the element whose index we want to find.

Let's take an example of a list called `my_list` containing some elements:
```python
my_list = [10, 20, 30, 40, 50]
```

To get the index of an element in this list, we can call the `index()` method as follows:

```python
index = my_list.index(30)
print(index)
```

This will output:
```
2
```
Here, the value 2 represents the index of the element 30 in the list.

However, if the element is not present in the list, then calling the `index()` method will result in a `ValueError`. For example:
```python
index = my_list.index(60)
```

This will result in the following error:
```
ValueError: 60 is not in list
```