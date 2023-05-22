In Go programming language, we can use the `time` package to work with various time-related tasks, such as measuring elapsed time, parsing and formatting date and time strings, creating timers, getting the current time, etc. The `time` package defines a `Time` struct that represents a point in time, and provides various methods and functions to manipulate and compare time values.

Here are some examples of using times in Go:

1. Creating a time value: We can create a time value using the `time.Now()` function, which returns the current local time. For example:

    ```
    now := time.Now()
    ```

2. Formatting a time value: We can convert a time value to a string representation using the `time.Format()` method, which takes a format string as an argument. The format string specifies how the date and time should be formatted. For example:

    ```
    now := time.Now()
    fmt.Println(now.Format("2006-01-02 15:04:05"))
    // Output: 2022-03-10 10:30:20
    ```

3. Parsing a time string: We can parse a time string into a time value using the `time.Parse()` function, which takes a format string and a time string as arguments. For example:

    ```
    str := "2022-03-10 10:30:20"
    t, _ := time.Parse("2006-01-02 15:04:05", str)
    fmt.Println(t)
    // Output: 2022-03-10 10:30:20 +0000 UTC
    ```

4. Adding or subtracting a duration: We can add or subtract a duration to/from a time value using the `time.Add()` and `time.Sub()` methods. For example:

    ```
    now := time.Now()
    later := now.Add(2 * time.Hour)
    diff := later.Sub(now)
    fmt.Println(diff)
    // Output: 2h0m0s
    ```

5. Sleeping for a certain duration: We can make the current goroutine sleep for a certain duration using the `time.Sleep()` function. For example:

    ```
    fmt.Println("Before sleep")
    time.Sleep(2 * time.Second)
    fmt.Println("After sleep")
    // Output: Before sleep
    //         After sleep (after 2 seconds)
    ```

These are just a few examples of how to use times in Go. For more information and examples, you can refer to the official documentation of the `time` package: https://golang.org/pkg/time/