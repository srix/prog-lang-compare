In C++, we can run commands using system() function. 

Syntax:
```
#include <cstdlib>
system("command");
```
Here, the command is any valid command in the system's shell/command prompt. 

For example, let's say we want to run the "dir" command in Windows:

```
#include <cstdlib>
#include <iostream>
using namespace std;

int main() {
    system("dir");
    return 0;
}
```

Similarly, we can run other commands too. For example, running the "ls" command in Linux:

```
#include <cstdlib>
#include <iostream>
using namespace std;

int main() {
    system("ls");
    return 0;
}
```

Note: system() function can be dangerous if used recklessly. Running system() with unsanitized input can potentially allow execution of arbitrary code. So, it's always recommended to use system() function with care and only when necessary.