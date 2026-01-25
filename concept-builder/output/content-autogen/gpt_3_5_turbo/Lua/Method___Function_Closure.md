In Lua, a closure is a function that has access to variables that are defined outside of its own scope. This means that even if the variables are not defined inside the function itself, the function can still use and modify them. Here's an example:

```
function outerFunction()
    local count = 0
    
    return function()
        count = count + 1
        print(count)
    end
end

local myFunction = outerFunction()

myFunction()
myFunction()
myFunction()
```

In this example, `outerFunction` creates a closure by defining a local variable `count` and returning an anonymous function that increments and prints `count` every time it's called. The anonymous function is then assigned to `myFunction`.

When `myFunction` is called, it still has access to `count` even though it's not defined within the function. This is because `count` is part of the closure created by `outerFunction`.

So when we call `myFunction` three times, the output prints:

```
1
2
3
```

Another example:

```
function createMultiplier(x)
    return function(y)
        return x * y
    end
end

local double = createMultiplier(2)
local triple = createMultiplier(3)

print(double(4)) --> 8
print(triple(5)) --> 15
```

In this example, `createMultiplier` returns an anonymous function that takes a parameter `y` and multiples it by `x`, which is defined in the outer scope. We then create two new functions, `double` and `triple`, by calling `createMultiplier` with arguments 2 and 3, respectively.

When we call `double(4)`, `x` is 2 and `y` is 4, so the function returns 8. Similarly, when we call `triple(5)`, `x` is 3 and `y` is 5, so the function returns 15.

In both of these examples, closures allow us to create functions that have persistent state or encapsulate logic.