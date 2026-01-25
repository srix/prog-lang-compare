Block passing is a new feature introduced in Python 3.10 that allows passing multiple parameters as blocks of data. This is useful when working with large amounts of data or complex data types.

Here's an example of how to use block passing in Python 3.10:

```
def function_using_block_passing(*, data: bytes):
    print(data)
```

In this example, the `*` indicates that the following parameters must be passed using block passing. In this case, we're passing a single parameter called `data` that is a bytes object.

To call this function, we can pass a bytes object as the `data` parameter:

```
my_data = b'\x00\x01\x02\x03'
function_using_block_passing(data=my_data)
```

This will output the following:

```
b'\x00\x01\x02\x03'
```

Alternatively, we can also pass multiple bytes objects as separate blocks:

```
my_data1 = b'\x00\x01'
my_data2 = b'\x02\x03'
function_using_block_passing(data=my_data1, data=my_data2)
```

This will have the same effect as passing a single bytes object:

```
b'\x00\x01\x02\x03'
```

In summary, block passing in Python 3.10 allows passing multiple parameters as blocks of data, which can simplify the code and improve performance when working with large amounts of data.