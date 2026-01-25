```julia
In Julia, to use external packages or libraries we need to use the `using` statement followed by the name of the package we want to import. 

For example, to import the popular `DataFrames` package, we write:

using DataFrames

This will make all the functions and types exported by the `DataFrames` package available to us.

We can also import specific functions or types from a package using the `import` statement. For example, if we only want to use the `DataFrame` type and the `describe` function from the `DataFrames` package, we can write:

import DataFrames: DataFrame, describe

Here's an example of importing the `Plots` and `Statistics` packages in Julia:

using Plots
using Statistics

# Now we can use functions from the `Plots` and `Statistics` packages
plot(rand(10))
mean([1, 2, 3, 4, 5])

Alternatively, we could have imported specific functions from these packages like this:

import Plots: plot
import Statistics: mean

# Now we can only use the `plot` and `mean` functions from the `Plots` and `Statistics` packages respectively
plot(rand(10))
mean([1, 2, 3, 4, 5])
```