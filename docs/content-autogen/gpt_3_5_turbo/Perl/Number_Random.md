In Perl, there are several ways to generate random numbers. Below are some common examples:

1. Using rand() function: The rand() function returns a random fractional number between 0 and 1. To generate a random number in a certain range, you can multiply the returned value by the range and add the minimum number. For example, to generate a random integer between 1 and 10:

```
$rand_num = int(rand(10)) + 1;
```

2. Using rand() with srand() function: If you want to generate the same sequence of random numbers every time a program runs, you can use the srand() function to seed the rand() function with a specific value. For example, to generate the same random sequence every time the program runs:

```
srand(1234);
$rand_num1 = int(rand(10)) + 1;
$rand_num2 = int(rand(10)) + 1;
```

3. Using rand() with time() function: If you want to generate a different random sequence every time a program runs, you can use the current time value as the seed for srand(). For example, to generate a random number between 1 and 100:

```
srand(time());
$rand_num = int(rand(100)) + 1;
```

Note that in all the above examples, we use the int() function to convert the random fractional number into an integer.