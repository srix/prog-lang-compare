In Julia, you can generate random numbers using the built-in `rand()` function. The `rand()` function generates random numbers between 0 and 1, but you can modify the function to generate random numbers within a specific range or distribution by specifying additional arguments.

Here are some examples:

1. Generating a single random number:

```
x = rand()
println(x)
```

output: 
```
0.9422058042215884
```

2. Generating an array of random numbers with a specific length:

```
y = rand(4)
println(y)
```

output: 
```
[0.47323489473636157, 0.12814336664004973, 0.4702968436875229, 0.9075321195896226]
```

3. Generating an array of random integers:

```
z = rand(1:10, 4)
println(z)
```

output: 
```
[3, 10, 6, 3]
```

4. Generating an array of random numbers from a normal distribution:

```
using Distributions
d = Normal(0, 1)
w = rand(d, 4)
println(w)
```

output:
```
[-1.5465989124067583, 1.144852326566234, -1.465502679652771, -0.331274166634437]
```

These are just a few examples of how to generate random numbers in Julia. There are many more ways to generate random numbers with different distributions and using different methods.