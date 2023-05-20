Struct is a module in Python that can be used to convert binary data into structured data, and vice versa. It is often used with files, network protocols, and low-level data manipulation.

Here is an example of how to use struct in Python 3.10:

```python
import struct

# packing binary data
binary_data = struct.pack('>3h', 1, 2, 3)
print(binary_data)  # prints b'\x00\x01\x00\x02\x00\x03'

# unpacking binary data
unpacked_data = struct.unpack('>3h', binary_data)
print(unpacked_data)  # prints (1, 2, 3)
```

In this example, we first import the struct module. Then we use the pack() method to pack the values 1, 2, and 3 into a binary format using the format string '>3h', which means we are packing 3 short integers (2 bytes each) in big-endian byte order. We print the binary data, which outputs the byte string b'\x00\x01\x00\x02\x00\x03'.

Next, we use the unpack() method to unpack the binary data into its original values. We provide the same format string as before, and pass the binary data as an argument. The unpack() method returns a tuple containing the unpacked values. We print the unpacked data, which outputs the tuple (1, 2, 3).

This is a simple example of how to use struct in Python 3.10 to pack and unpack binary data. There are many other formatting codes and options available for struct that you can use depending on your specific use case.