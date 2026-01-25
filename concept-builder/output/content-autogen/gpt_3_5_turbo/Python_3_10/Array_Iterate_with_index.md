To iterate over an array with index in Python 3.10, you can use the new `enumerate()` function in a `for` loop.

Here's an example:

```
fruits = ['apple', 'banana', 'cherry']

for index, fruit in enumerate(fruits):
    print(index, fruit)
```

Output:

```
0 apple
1 banana
2 cherry
```

In this example, `enumerate()` returns an iterator that produces tuples containing the index and value of each element in `fruits`. The `for` loop then unpacks each tuple into `index` and `fruit` variables, which are printed to the console. Note that `enumerate()` returns 0-based indexes by default, but you can specify a different starting value by passing a second argument to the function. For example:

```
fruits = ['apple', 'banana', 'cherry']

for index, fruit in enumerate(fruits, start=1):
    print(index, fruit)
```

Output:

```
1 apple
2 banana
3 cherry
```

In this example, `enumerate()` starts counting at 1 instead of 0.