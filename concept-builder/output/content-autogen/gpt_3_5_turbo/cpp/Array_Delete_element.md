To delete an element from an array in C++, you need to shift all the elements after the removed element to the left by one position. Here's an example code:

```
#include <iostream>
using namespace std;

const int MAX_SIZE = 100;

int main() {
    int arr[MAX_SIZE], n, pos, i;
    
    cout << "Enter array size: ";
    cin >> n;
    
    cout << "Enter array elements: ";
    for(i=0; i<n; i++) {
        cin >> arr[i];
    }
    
    cout << "Enter position to delete element: ";
    cin >> pos;
    
    if(pos < 1 || pos > n) {
        cout << "Invalid position!";
    } else {
        for(i = pos - 1; i<n-1; i++) {
            arr[i] = arr[i+1];  // shifting elements to left
        }
        
        n--;
        
        cout << "Array after deleting element:" << endl;
        for(i=0; i<n; i++) {
            cout << arr[i] << " ";
        }
    }
    
    return 0;
}
```

In this code, we first take input the size of the array and its elements. Then we take input the position to delete the element. If the position is valid, we shift all the elements to left starting from the position to be deleted and reduce the size of the array by 1. Finally, we display the array after deleting the element.

For example, let's say we have an array {10, 20, 30, 40, 50} and we want to delete the element at position 3. The output will be:

```
Enter array size: 5
Enter array elements: 10 20 30 40 50
Enter position to delete element: 3
Array after deleting element:
10 20 40 50
```