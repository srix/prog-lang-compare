The 'for' loop in Visual Basic .NET is used to execute a block of code repeatedly for a predetermined number of times.

The syntax for the 'for' loop is as follows:

`For counter As datatype = start To end [Step step]`

`[statements]`

`Next [counter]`

Here, `counter` is a variable used to keep track of the iteration count, `datatype` is the data type of the counter variable, `start` is the initial value of the `counter`, `end` is the final value of the `counter` and `step` is the increment value of the `counter` on each iteration. `Step` is optional and if not specified, the default value is 1.

Let's look at an example:

```
Dim i As Integer
For i = 1 To 5
    Console.WriteLine(i)
Next
```

This will output the numbers 1 to 5 on the console.

Another example with `Step`:

```
Dim i As Integer
For i = 2 To 10 Step 2
    Console.WriteLine(i)
Next
```

This will output the even numbers from 2 to 10 on the console.

We can also use the 'for' loop to iterate through arrays:

```
Dim arr() As Integer = {1, 2, 3, 4, 5}
Dim i As Integer
For i = 0 To arr.Length - 1
    Console.WriteLine(arr(i))
Next
```

This will output the elements of the array on the console.

In conclusion, the 'for' loop is a powerful tool in Visual Basic .NET for iterating through and manipulating data in a controlled manner.