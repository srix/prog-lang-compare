To convert an integer to a float in C#, you can use the `Convert.ToSingle()` method or cast the integer value to a float using the `(float)` or `float.Parse()` methods. Here are some examples:

Using Convert.ToSingle() method:
```
int numInt = 5;
float numFloat1 = Convert.ToSingle(numInt);
Console.WriteLine(numFloat1);
// Output: 5.0
```

Using casting:
```
int numInt = 5;
float numFloat2 = (float)numInt;
Console.WriteLine(numFloat2);
// Output: 5.0
```

Using float.Parse():
```
int numInt = 5;
float numFloat3 = float.Parse(numInt.ToString());
Console.WriteLine(numFloat3);
// Output: 5.0
``` 

Note that if the integer value is too large for a float type, you may lose precision and get unexpected results.