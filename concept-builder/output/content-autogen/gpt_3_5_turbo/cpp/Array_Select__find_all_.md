To find all elements of an array satisfying a condition in C++, you need to traverse the array and evaluate the given condition for each element. If the condition is true, add the element to a new array or print it out.

Here's an example code snippet that demonstrates how to find all even numbers in an array using a for loop:

```cpp
#include <iostream>

using namespace std;

int main() {
   int arr[] = {2, 7, 4, 8, 5, 10};
   int even_arr[6];
   int count = 0;
   int size = sizeof(arr)/sizeof(arr[0]);

   for(int i = 0; i < size; i++) {
      if(arr[i] % 2 == 0) {
         even_arr[count] = arr[i];
         count++;
      }
   }

   cout << "Even elements: ";
   for(int i = 0; i < count; i++) {
      cout << even_arr[i] << " ";
   }

   return 0;
}
```

In this code we declare an array `arr` with 6 elements. We create a new empty array `even_arr` to store all the even elements in `arr`. We then iterate through the `arr` using a for loop, and for each element, we check if it is even by using the condition `if(arr[i] % 2 == 0)`. If it is even, we add it to the `even_arr` and increment the `count` variable. Finally, we iterate through `even_arr` and print out all the even elements found.

Output:
```
Even elements: 2 4 8 10
```