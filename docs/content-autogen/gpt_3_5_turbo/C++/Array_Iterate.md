In C++, we can use loops to iterate over arrays. There are several ways to iterate over an array in C++. Here are some examples:

1. Using a for loop:
```
int arr[5] = {1, 2, 3, 4, 5};
for(int i = 0; i < 5; i++) {
    cout << arr[i] << " ";
}
```
Output:
```
1 2 3 4 5
```

2. Using a range-based for loop (C++11 and above):
```
int arr[5] = {1, 2, 3, 4, 5};
for(int x : arr) {
    cout << x << " ";
}
```
Output:
```
1 2 3 4 5
```

3. Using pointers:
```
int arr[5] = {1, 2, 3, 4, 5};
int *ptr = arr;
for(int i = 0; i < 5; i++) {
    cout << *(ptr+i) << " ";
}
```
Output:
```
1 2 3 4 5
```

4. Using iterators:
```
int arr[5] = {1, 2, 3, 4, 5};
int *begin = arr;
int *end = arr + 5;
for(int *ptr = begin; ptr != end; ptr++) {
    cout << *ptr << " ";
}
```
Output:
```
1 2 3 4 5
```

These are just a few examples of how to iterate over an array in C++. There are many other ways to do so as well, depending on the situation and the type of array.