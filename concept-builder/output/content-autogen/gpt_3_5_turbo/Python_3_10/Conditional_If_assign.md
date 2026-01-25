In Python 3.10, the if assign statement was introduced as a shorthand for if statements that assign a value to a variable. It combines the if statement and the assignment of a value to a variable in a single line of code. Here is an example of using if assign in Python 3.10:

```
age = 18
is_adult = True if age >= 18 else False
print(is_adult)
```

In this example, the if assign statement checks if the age variable is greater than or equal to 18. If it is, the is_adult variable is assigned the value True; otherwise, it is assigned the value False. This code will output True, as the age variable is equal to 18.

Here is another example of using if assign in Python 3.10:

```
num = 5
even_or_odd = "even" if num % 2 == 0 else "odd"
print(even_or_odd)
```

In this example, the if assign statement checks if the remainder (modulo) of num divided by 2 is equal to 0. If it is, even_or_odd is assigned the value "even"; otherwise, it is assigned the value "odd". This code will output "odd", as the value of num is 5 and therefore not divisible by 2 without a remainder.