In C++, we can create and return an array using the following syntax:

```c++
datatype* functionName() {
    datatype* pointerVariable = new datatype[size];
    // code to initialize the array or assign values to its elements
    return pointerVariable;
}
```

In the above code, we first create an array using the 'new' keyword and then return the pointer variable containing the starting address of that array. Here is an example to illustrate how to use this syntax:

```c++
#include<iostream>
using namespace std;

int* createArray(int n) {
    int* arr = new int[n];
    for(int i = 0; i < n; i++) {
        arr[i] = i + 1;
    }
    return arr;
}

int main() {
    int size;
    cout << "Enter the size of the array: ";
    cin >> size;
    int* arr = createArray(size);
    cout << "Array elements are: ";
    for(int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    delete [] arr;
    return 0;
}
```

In this example code, we have created an array of size 'n' using the 'new' keyword inside the 'createArray' function. Then we have initialized the array elements with values from 1 to 'n'. Finally, we have returned the pointer variable containing the starting address of the array. In the main function, we have called the 'createArray' function, received the returned pointer variable in another pointer variable named 'arr', and printed the array elements. At the end of the program, we have used the 'delete' operator to deallocate the memory occupied by the array.