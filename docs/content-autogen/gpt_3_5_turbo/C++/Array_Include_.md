In C++, you can use the `std::find()` function to check if an array includes an element. This function returns an iterator to the first occurrence of the element in the array, or `std::end(array)` if the element is not found.

Here is an example code snippet that demonstrates how to use the `std::find()` function to search for an element in an array:

```
#include <iostream>
#include <algorithm>
using namespace std;

int main() {
   int arr[] = { 12, 42, 30, 75, 24 };
   int n = sizeof(arr) / sizeof(arr[0]);
   int x = 30;

   // Search for the element in the array
   auto itr = find(arr, arr + n, x);

   // Check if the element is found
   if (itr != end(arr)) {
      cout << "Element " << x << " is found in the array." << endl;
   } else {
      cout << "Element " << x << " is not found in the array." << endl;
   }

   return 0;
}
```

In this example, we have an array `arr` containing five elements. We define a variable `x` to search for the element `30` in the array. We then use the `std::find()` function to find the element `30` in the array. If the iterator returned by `find()` is not equal to `end(arr)`, it means that the element has been found in the array, otherwise it has not been found. In this case, the output will be: `Element 30 is found in the array.`