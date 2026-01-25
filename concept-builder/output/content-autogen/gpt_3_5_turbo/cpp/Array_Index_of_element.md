In C++, the index of an element in an array refers to the position of that element within the array. The first element of an array has an index of 0, the second element has an index of 1, and so on. 

To get the index of an element in an array in C++, you can loop through the array and compare each element with the one you are looking for. Once you find the element, you can return its index. 

Here's an example:

```c++
#include <iostream>
using namespace std;

int main() {
    int arr[] = {2, 4, 6, 8, 10};
    int num = 8; // Element to find
    int index = -1; // Initialize variable to store index
    
    // Loop through the array to find the element
    for(int i = 0; i < 5; i++) {
        if(arr[i] == num) {
            index = i; // Store the index of the element
            break; // Break out of the loop once the element is found
        }
    }
    
    // Print the index of the element
    if(index == -1) {
        cout << "Element not found in array" << endl;
    }
    else {
        cout << "Index of element " << num << " is " << index << endl;
    }
    
    return 0;
}
```

Output:

```
Index of element 8 is 3
```

In this example, the array `arr` is defined with five elements, and the element we are looking for is `8`. The variable `index` is initialized to `-1` to check if the element is not found. The loop iterates through the array and compares each element with `8` until it is found. Once the element is found, the index is stored in the `index` variable and the loop is broken. Finally, the program checks if the element was found and prints its index, or if it was not found.