In Go language, the nil keyword is used to represent the value of a reference type when it isn't pointing to any address in memory. Here are some examples of how to check if a value is null/true/false using Go:

1. To check if a value is nil or not, you can use the ‘==’ operator. For example:

    {
        var pointer *int = nil
        if pointer == nil {
            fmt.Printf("Pointer is nil")
        }
    }

2. To check if a boolean value is true or false, you can simply use an if statement. For example:

    {
        var flag bool = true
        if flag {
            fmt.Printf("Flag is true")
        } else {
            fmt.Printf("Flag is false")
        }
    }

3. To check if a boolean value is false, you can use the ‘!’ operator. For example:

    {
        var flag bool = false
        if !flag {
            fmt.Printf("Flag is false")
        }
    }

Note that the ‘!’ operator flips the value of the boolean variable. If it was true, it becomes false, and if it was false, it becomes true.