In C#, regex (short for regular expression) can be used with the help of the System.Text.RegularExpressions namespace. This namespace provides classes and methods for working with regex patterns.

Here is a simple example of how to use regex in C# to validate an email address:

```
using System;
using System.Text.RegularExpressions;

class Program
{
    static void Main()
    {
        string email = "john.doe@example.com";
        string pattern = @"^[^@\s]+@[^@\s]+\.[^@\s]+$";

        if (Regex.IsMatch(email, pattern))
        {
            Console.WriteLine("{0} is a valid email address.", email);
        }
        else
        {
            Console.WriteLine("{0} is not a valid email address.", email);
        }
    }
}
```

In the above example, we define a regex pattern that matches a standard email format. The `^` and `$` symbols indicate the start and end of the string, and the `[^@\s]+` matches one or more characters that are not "@" or whitespace.

Here is another example of using regex in C# to extract phone numbers from a string:

```
using System;
using System.Text.RegularExpressions;

class Program
{
    static void Main()
    {
        string text = "Call me at 555-123-4567 or 123-456-7890.";
        Regex regex = new Regex(@"\d{3}-\d{3}-\d{4}");

        MatchCollection matches = regex.Matches(text);
        foreach (Match match in matches)
        {
            Console.WriteLine("Phone number found: " + match.Value);
        }
    }
}
```

In this example, we create a regex object that matches a phone number pattern. The pattern `\d{3}-\d{3}-\d{4}` matches three digits, followed by a hyphen, then three more digits, another hyphen, and finally four digits. We use the `Matches` method to find all instances of this pattern in the given text, and then print out each match found.