In C#, we can convert a string into an integer using various methods. Here are three examples:

1. Using the Parse method: 

```csharp
string str = "100";  
int num = int.Parse(str);
```

In this example, we first declare a string variable named 'str' and assign it the value "100". We then use the int.Parse method to convert the string into an integer and assign it to a variable called 'num'.

2. Using the TryParse method:

```csharp
string str = "100";  
int num;  
bool result = int.TryParse(str, out num);  
if (result)  
{  
    Console.WriteLine("Conversion successful. The integer is: " + num);  
}  
else  
{  
    Console.WriteLine("Conversion failed.");  
}  

```

Here, we use the TryParse method which attempts to convert the string to an integer and returns a boolean value indicating whether the conversion was successful or not. If the conversion was successful, num will be assigned the converted integer value.

3. Using the Convert method:

```csharp
string str = "100";
int num = Convert.ToInt32(str); 
```

This method is similar to the Parse method, but it can handle null values and returns a default value if the string is null or empty.

All three methods convert a string into an integer, but the second method is the most recommended method because it prevents exceptions from being thrown when the input value is not a valid integer.