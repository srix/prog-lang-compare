In C#, the switch statement is used to execute a specific set of instructions based on the value of an expression. Here is an example of using the switch statement in C#:

```
int num = 3;
switch(num)
{
    case 1:
        Console.WriteLine("The number is one.");
        break;
    case 2:
        Console.WriteLine("The number is two.");
        break;
    case 3:
        Console.WriteLine("The number is three.");
        break;
    default:
        Console.WriteLine("The number is not one, two or three.");
        break;
}
```
In this example, we have declared an integer variable 'num' and initialized its value to 3. Then, we have used the switch statement to check the value of the 'num' variable. Based on the value, the corresponding case will be executed.

Since the value of 'num' is 3, the third case will be executed and the output will be "The number is three."

If the value of 'num' was not 1, 2, or 3, then the default case would be executed and the output would be "The number is not one, two or three."

Another example using a string expression:

```
string word = "apple";
switch(word)
{
    case "banana":
        Console.WriteLine("The word is banana.");
        break;
    case "orange":
        Console.WriteLine("The word is orange.");
        break;
    case "apple":
        Console.WriteLine("The word is apple.");
        break;
    default:
        Console.WriteLine("The word is not banana, orange, or apple.");
        break;
}
```
In this example, we have declared a string variable 'word' and initialized its value to "apple." Then, we have used the switch statement to check the value of the 'word' variable. Based on the value, the corresponding case will be executed.

Since the value of 'word' is "apple," the third case will be executed and the output will be "The word is apple."

If the value of 'word' was not "banana," "orange," or "apple," then the default case would be executed and the output would be "The word is not banana, orange, or apple."