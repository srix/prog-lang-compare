In Visual Basic .NET, `For` loop is used to execute a block of statements repeatedly for a specific number of times.

The syntax of a `For` loop with a step is as follows:

```
For counter_variable As datatype = start_value To end_value Step step_value
    'Statements to execute
Next
```

Here is an explanation of the components of a `For` loop with a step:

- **counter_variable**: It is the variable that represents the counts, which is incremented or decremented in each iteration of the loop.

- **datatype**: It is the data type of the counter_variable.

- **start_value**: It is the initial value of the counter_variable.

- **end_value**: It is the final value of the counter_variable.

- **step_value**: It is the value by which the counter_variable is incremented or decremented in each iteration of the loop.

Let's see an example now, suppose we want to print the even numbers between 2 and 10. The following code will do this using a `For` loop with a step of 2.

```
For i As Integer = 2 To 10 Step 2
    Console.WriteLine(i)
Next
```

The output of the above code will be as follows:

```
2
4
6
8
10
```

In this example, we have initialized the `counter_variable` to 2 and set the `step_value` to 2. The `end_value` of the loop is 10, which means the loop will execute 5 times. In each iteration, the value of the `counter_variable` is incremented by 2, i.e., 2, 4, 6, 8, 10 are printed.