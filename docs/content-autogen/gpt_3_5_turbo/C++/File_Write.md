In C++, writing a file involves creating an output file stream and opening the file in write mode. Here's an example:

```
#include <iostream>
#include <fstream>

using namespace std;

int main () {
  ofstream myfile;  // create an output file stream object
  myfile.open ("example.txt");  // open a file called "example.txt" in write mode

  // write some text to the file
  myfile << "This is some text that will be written to a file." << endl;
  myfile << "Here's another line of text." << endl;

  myfile.close();  // close the file

  return 0;
}
```

In this example, we first include the `iostream` and `fstream` header files. We then create an output file stream object called `myfile` using the `ofstream` class. We use the `open()` function to open a file called "example.txt" in write mode. 

We can then write some text to the file using the stream insertion operator (`<<`). Finally, we close the file using the `close()` function.

When we run this program, it will create a file called "example.txt" in the same directory as the program file, and write the specified text to the file.