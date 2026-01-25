In Python 3.10, you can create an array using the built-in `array` module. 

To create an array, you need to import the `array` module and then call the `array()` function, passing in the type code for the type of elements you want in the array, followed by the elements themselves. 

Here's an example of how you can create an array of integers:

```python
import array

my_array = array.array('i', [1, 2, 3, 4, 5])
```

In the code above, the first argument to the `array()` function is the type code `'i'`, which stands for signed integer. The second argument is a list of integers `[1, 2, 3, 4, 5]` that will be added to the array.

You can also create an array of different types. Here are a few examples:

```python
import array

# Array of floats
my_array = array.array('f', [1.0, 2.5, 3.14])

# Array of bytes
my_array = array.array('b', [0x10, 0x20, 0x30])

# Array of characters
my_array = array.array('u', ['a', 'b', 'c'])
```

Note that the type code you use depends on the type of elements you want to store in the array. Here are some common type codes:

- `b` - signed integer (byte)
- `B` - unsigned integer (byte)
- `i` - signed integer (int)
- `I` - unsigned integer (int)
- `f` - floating point number (float)
- `u` - Unicode character (str)