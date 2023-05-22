In C#, there are several ways to compare strings:

1. Using the Equals method: The Equals method compares the contents of two strings character by character. It returns a Boolean value indicating whether the two strings contain the same characters or not. Here's an example:

```
string var1 = "hello";
string var2 = "world";
bool isEqual = var1.Equals(var2);
Console.WriteLine(isEqual); // false
```

2. Using the == operator: The == operator performs the same comparison as the Equals method. Here's an example:

```
string var1 = "hello";
string var2 = "world";
bool isEqual = var1 == var2;
Console.WriteLine(isEqual); // false
```

3. Using the CompareTo method: The CompareTo method compares two strings based on their lexical order. It returns an integer value indicating their relative position in the ordering. If the two strings are equal, the method returns 0; if the first string is less than the second, it returns a negative number; if the first string is greater than the second, it returns a positive number. Here's an example:

```
string var1 = "hello";
string var2 = "world";
int comparisonResult = var1.CompareTo(var2);
Console.WriteLine(comparisonResult); // -15
```

4. Using the StringComparison enumeration: The StringComparison enumeration provides several options for string comparison, such as ignoring case or culture-specific comparisons. Here's an example:

```
string var1 = "hello";
string var2 = "HELLO";
bool isEqual = var1.Equals(var2, StringComparison.OrdinalIgnoreCase);
Console.WriteLine(isEqual); // true
```

Overall, the choice of which method to use depends on the specific requirements of your application.