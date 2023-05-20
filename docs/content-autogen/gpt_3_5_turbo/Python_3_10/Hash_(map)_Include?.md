In Python 3.10, you can use the `in` operator to check if a key is present in a hash (also known as a dictionary). Here's an example:

```python
# Define a hash with some key-value pairs
my_hash = {"apple": 1, "banana": 2, "cherry": 3}

# Check if a key is in the hash
if "banana" in my_hash:
    print("Banana is in the hash!")
else:
    print("No banana in the hash :(")

# Check if a missing key is in the hash
if "durian" in my_hash:
    print("Durian is in the hash!")
else:
    print("No durian in the hash :(")
```

Output:

```
Banana is in the hash!
No durian in the hash :(
```

In this example, `my_hash` is a dictionary with three key-value pairs. We then use the `in` operator to check if `"banana"` is a key in the dictionary, and print a message accordingly. We also check if the missing key `"durian"` is in the dictionary, and print a different message.