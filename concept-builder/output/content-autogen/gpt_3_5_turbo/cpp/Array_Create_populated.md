To create an array in C++, you need to follow these steps:

Step 1: Declare the array with its data type and size. For example:

```
int numbers[5];
```

This declares an integer array with 5 elements. Each element can hold an integer value.

Step 2: Initialize the array by assigning values to its elements. For example:

```
int numbers[5] = {1, 2, 3, 4, 5};
```

This initializes the first five elements of the array with the values 1, 2, 3, 4, and 5.

Step 3: Access the elements of the array using their index. For example:

```
cout << numbers[0]; // Outputs 1
cout << numbers[2]; // Outputs 3
```

Here's an example program that creates and initializes an array in C++:

```
#include <iostream>
using namespace std;

int main() {
  int numbers[5] = {1, 2, 3, 4, 5};
  
  cout << "The values in the array are: ";
  for(int i = 0; i < 5; i++) {
    cout << numbers[i] << " ";
  }
  
  return 0;
}
```

This program outputs:

```
The values in the array are: 1 2 3 4 5
```

Now, you can use the array throughout your program, accessing and modifying its elements as needed.