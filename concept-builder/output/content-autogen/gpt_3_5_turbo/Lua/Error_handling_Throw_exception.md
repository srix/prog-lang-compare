In Lua, you can throw an exception or raise an error using the `error()` function. This function accepts an error message string as the first argument and optionally a level number as the second argument, which indicates the level in the call stack where the error occurred. Here are some examples:

Example 1: Raise an error with a custom error message and the default error level.

```
-- This function takes a number as input and returns its reciprocal.
function reciprocal(num)
  if num == 0 then
    -- If the input is zero, raise an error with a custom message.
    error("Error: Cannot calculate reciprocal of zero.")
  else
    return 1 / num
  end
end

-- Call the function with valid input.
print(reciprocal(2)) -- Output: 0.5

-- Call the function with invalid input.
reciprocal(0) -- Output: Error: Cannot calculate reciprocal of zero.
```

Example 2: Raise an error with a custom error message and a specific error level.

```
-- This function takes a string as input and returns its length.
function string_length(str)
  if type(str) ~= "string" then
    -- If the input is not a string, raise an error with a custom message.
    error("Error: Input parameter must be a string.", 2)
  else
    return #str
  end
end

-- Call the function with valid input.
print(string_length("Hello")) -- Output: 5

-- Call the function with invalid input.
string_length(123) -- Output: Error: Input parameter must be a string.
```

In both examples, when an error is raised, the execution of the program stops immediately and the error message is printed to the console.