Regex (Regular Expressions) are used in C++ to search and match patterns in strings. The C++ Standard Library provides a library for regex which is included in the <regex> header.

Here is a code snippet that demonstrates the use of regex in C++:

```cpp
#include <iostream>
#include <regex>
using namespace std;

int main() {
   regex pattern("([0-9]+) ([a-zA-Z]+)");
   smatch matches; // will hold the search results
   string text = "123 Hello, World!";
   
   // Search for the pattern and print the matches
   if (regex_search(text, matches, pattern)) {
      cout << "Number: " << matches.str(1) << endl;
      cout << "String: " << matches.str(2) << endl;
   }
   return 0;
}
```

In this example, the regex pattern "([0-9]+) ([a-zA-Z]+)" is used to match a number followed by a string of letters. The pattern consists of two parts: the first part searches for any number and the second part searches for any string of letters. The smatch object holds the search results.

The regex_search() function searches the string "text" for the pattern and if it finds a match, it saves the results in the smatch object "matches". The matches.str() function prints the matching results.

Output:
```
Number: 123
String: Hello
```

Another useful function is regex_replace(). Here is an example that demonstrates how to replace certain part of a string using regex_replace().

```cpp
#include <iostream>
#include <regex>
using namespace std;

int main() {
    string text = "John Smith is 35 years old.";
    regex pattern("([0-9]+) years old"); // pattern to match
    string replacement = "$1 years young"; // this will replace the age to young
    string new_text = regex_replace(text, pattern, replacement);
    cout << new_text << endl;

    return 0;
}
```

Output:
```
John Smith is 35 years young.
```

In this example, the regex pattern matches any number followed by "years old" and will be replaced with "$1 years young". "$1" refers to the first group that is matched which is the age. The regex_replace() function searches for the matching pattern in the string "text" and replaces it with the "replacement" string. The resulting new string is printed using cout.

These are just simple examples of how regex can be used in C++. The <regex> header provides many other options and functions such as regex_match(), regex_iterator() and more.