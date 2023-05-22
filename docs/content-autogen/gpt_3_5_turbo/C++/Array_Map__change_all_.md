To change all elements of an array in C++, you can use a for-loop to iterate through each element of the array and assign a new value to it.

Here is an example code that changes all elements of an array:

```cpp
#include <iostream>
using namespace std;

int main()
{
    int arr[5] = {1, 2, 3, 4, 5};
    
    // Using for loop to change all elements of the array
    for(int i = 0; i < 5; i++){
        arr[i] = arr[i] * 2;
    }
    
    // Printing the updated array
    for(int i = 0; i < 5; i++){
        cout << arr[i] << " ";
    }
    
    return 0;
}
```

In this example, we have an integer array `arr` with 5 elements. We use a `for` loop to iterate through each element of the array and multiply it with 2 to update the value. Finally, we use another `for` loop to print the updated array.

The output of this code will be: `2 4 6 8 10`