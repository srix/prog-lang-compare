To find the first element of an array in C++, you can simply use the index operator `[]` with an index of `0`. Here's some example code:

```c++
#include <iostream>
using namespace std;

int main() {
  int arr[] = {1, 2, 3, 4, 5};
  int firstElement = arr[0];
  cout << "The first element of the array is: " << firstElement << endl;
  return 0;
}
```

In this example, we first declare an integer array `arr` with five elements and initialize its values. Then, we use the index operator `[]` to access the first element of the array (which has an index of `0`) and assign its value to a variable called `firstElement`. Finally, we print out the value of `firstElement` to the console. The output of this code will be:

```
The first element of the array is: 1
```