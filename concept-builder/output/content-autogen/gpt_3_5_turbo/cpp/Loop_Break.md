In C++, the break statement is used to terminate a loop early, such as for loop, while loop or do-while loop. 

The syntax of using break in C++ is as follows:

```
break;
```

This statement is usually placed inside a loop construct, and when it is executed, control is transferred to the statement immediately following the loop. 

Here is an example of using break statement in C++ with a for loop:

```c++
#include <iostream>

using namespace std;

int main() {
    for (int i = 1; i <= 10; i++) {
        if (i == 5) {
            break;
        }
        cout << i << " ";
    }
    cout << endl;
    return 0;
}
```

The output of this code will be:

```
1 2 3 4
```

As you can see, the loop has terminated early, because the value of the loop variable `i` was equal to 5. Once the break statement was executed, the loop ended and control passed to the next statement in the program.

Here is another example of using break statement in C++ with a while loop:

```c++
#include <iostream>

using namespace std;

int main() {
    int i = 1;
    while (true) {
        cout << i << " ";
        i++;
        if (i == 5) {
            break;
        }
    }
    cout << endl;
    return 0;
}
```

The output of this code will be:

```
1 2 3 4
```

In this example, the while loop will continue to execute indefinitely until the break statement is executed when `i` equals 5. Once the break statement is executed, the while loop will end and control will pass to the next statement in the program.