Block passing is a technique in C++ where you can pass a block or a chunk of data as an argument to a function. This is often used to pass arrays or other data structures to a function.

To pass a block of data to a function, you can use a pointer to the beginning of the data block and the length of the block. Here is an example of passing an array of integers to a function using block passing:

```cpp
void printArray(int* arr, int size) {
    for(int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    printArray(arr, 5);
    return 0;
}
```

In the `printArray()` function, `arr` is a pointer to the beginning of the array and `size` is the length of the array. In the loop, we access the elements of the array using the pointer `arr`.

Another example of block passing is passing a struct or class object as an argument to a function. In this case, you would pass a pointer to the object and the size of the object:

```cpp
struct Rectangle {
    int length;
    int width;
};

void printRectangle(Rectangle* rect, int size) {
    cout << "Length: " << rect->length << ", ";
    cout << "Width: " << rect->width << endl;
}

int main() {
    Rectangle rect = {5, 10};
    printRectangle(&rect, sizeof(Rectangle));
    return 0;
}
```

In the `printRectangle()` function, `rect` is a pointer to the `Rectangle` object and `size` is the size of the object. We access the members of the object using the pointer `rect`. Note that we need to use the `sizeof` operator to get the size of the object, since the sizeof the struct may not be the sum of the sizes of its members due to padding and alignment issues.