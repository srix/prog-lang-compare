In Go, we can use the time package to perform time-related operations like measuring the duration of execution, waiting for a specific amount of time, formatting and parsing the date time, etc. 

Here are some examples of how to use time in Go:

1. Measuring the duration of execution:
```go
start := time.Now()
// code to be timed
duration := time.Since(start)
fmt.Println("Elapsed time: ", duration)
```

2. Waiting for a specific amount of time (e.g., waiting for 1 second):
```go
time.Sleep(1 * time.Second)
fmt.Println("Waited for 1 second")
```

3. Formatting and parsing the date time:
```go
now := time.Now()
fmt.Println("Current datetime: ", now.Format("2006-01-02 15:04:05")) // output: Current datetime: 2022-10-23 14:20:30
t, _ := time.Parse("2006-01-02 15:04:05", "2022-10-23 14:20:30")
fmt.Println("Parsed datetime: ", t) // output: Parsed datetime: 2022-10-23 14:20:30 +0000 UTC
```
In the first example, we use the `Format()` function to format the current time in the specified layout. Here, we use "2006" instead of "YYYY" and "01" instead of "MM" because that's how Go refers to the year and month. 

In the second example, we parse the string "2022-10-23 14:20:30" using the `time.Parse()` function and get the parsed time in the `t` variable. 

These are just a few examples of how to use time in Go. The `time` package provides many other functions and data types to work with time and date in Go.