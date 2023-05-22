Block binding, also known as "scoped functions" in Kotlin, refers to a way of creating a new scope within a block of code where a set of operations is performed as a group. There are four scoped functions available in Kotlin: 'let', 'run', 'with' and 'apply'. 

These functions allow you to create a temporary variable that only exists in the scope of that block, allowing you to perform operations on that variable without polluting the outer scope. This is particularly useful when you want to chain a sequence of operations together without having to create intermediate variables.

Here are some examples of how to use each of the four scoped functions in Kotlin:

1. let(): 
This function is called on an object and takes a lambda as an argument that operates on the object. The result of the lambda is returned as the result of the let() function. It is useful when you want to perform some operation on an object and return a modified version of that object.

Example:

```
val myString: String? = "Hello world"
val result = myString?.let { it.toUpperCase() } 
```

In this example, the let() function takes a nullable string and performs an operation (toUpperCase()) on it, returning the result. If the original string was null, the let() function would not execute the lambda and instead return null.

2. run(): 
This function is similar to let() but instead of returning the result of the lambda, it returns the object itself. It is useful when you want to perform a set of operations on an object and return the modified object.

Example:

```
val myString: String? = "Hello world"
val result = myString?.run { 
    val temp = toUpperCase()
    temp.replace("O", "0")
}
```

In this example, the run() function takes a nullable string and performs two operations on it (toUpperCase() and replace()), returning the modified string. If the original string was null, the run() function would not execute the lambda and instead return null.

3. with(): 
This function is similar to run() but takes the object as a parameter instead of calling it on the object directly. It is useful when you want to perform a set of operations on an object and return the modified object.

Example:

```
val myString: String? = "Hello world"
val result = with(myString) { 
    val temp = this?.toUpperCase()
    temp?.replace("O", "0")
}
```

In this example, the with() function takes a nullable string and performs two operations on it (toUpperCase() and replace()), returning the modified string. If the original string was null, the with() function would return null.

4. apply(): 
This function is called on an object and returns the object itself after performing some operations on it. It is useful when you want to modify the object's properties directly.

Example:

```
val myString: String? = "Hello world"
val result = myString?.apply { 
    replace("o", "0")
}
```

In this example, the apply() function takes a nullable string and replaces all occurrences of "o" with "0", returning the modified string. If the original string was null, the apply() function would not execute the lambda and instead return null. 

In conclusion, block binding with scoped functions in Kotlin allows you to easily create temporary variables and limit their scope to a specific block of code. This helps you organize your code and prevent unwanted side effects.