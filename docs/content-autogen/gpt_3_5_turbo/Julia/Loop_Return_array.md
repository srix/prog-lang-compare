To return an array in Julia, you can define the array and then use the `return` keyword to specify that the array should be returned from the function. Here's an example:

```julia
function create_array(size::Int)
    # define an array of zeros with the specified size
    arr = zeros(Float64, size)
    
    # fill the array with random numbers
    for i in 1:size
        arr[i] = rand()
    end
    
    # return the array
    return arr
end

# create an array with a size of 5
my_array = create_array(5)

# print the contents of the array
println(my_array)
```

In this example, the `create_array` function takes an integer size as an argument, creates an array of zeros with that size, fills the array with random numbers, and then returns the array. To call the function and use the returned array, we save the result of the function to a variable (`my_array` in this case) and then print the contents of the array with `println`.