In Python 3.10, you can use the `in` keyword to check if an element is present in an array. Here is an example:

```python
# Declare an array
fruits = ["apple", "banana", "cherry", "orange"]

# Check if an element is present in the array
if "banana" in fruits:
    print("Yes, banana is in the fruits array.")

# Check if an element is not present in the array
if "kiwi" not in fruits:
    print("No, kiwi is not in the fruits array.")
```

Output:

```
Yes, banana is in the fruits array.
No, kiwi is not in the fruits array.
```

In the first example, the `if` statement checks if `"banana"` is present in the `fruits` array, which is true, so the message gets printed. In the second example, the `if` statement checks if `"kiwi"` is not present in the `fruits` array, which is also true, so the message gets printed.