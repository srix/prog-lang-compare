Sure! To run a command in Groovy, you can use the `ProcessBuilder` or `Runtime.exec()` methods. Here are some examples:

1. Using `ProcessBuilder`:

```
def command = ['ls', '-al']
def processBuilder = new ProcessBuilder(command)
def process = processBuilder.start()

// Read the output of the process
def reader = new BufferedReader(new InputStreamReader(process.inputStream))
while ((line = reader.readLine()) != null) {
    println(line)
}

// Wait for the process to finish
process.waitFor()
```

In this example, we create a `ProcessBuilder` instance with the command we want to run (`ls -al`). We then start the process and read its output using a `BufferedReader` and `InputStreamReader`. Finally, we wait for the process to finish by calling `process.waitFor()`.

2. Using `Runtime.exec()`:

```
def command = "curl https://api.github.com"
def process = Runtime.getRuntime().exec(command)

// Read the output of the process
def reader = new BufferedReader(new InputStreamReader(process.inputStream))
while ((line = reader.readLine()) != null) {
    println(line)
}

// Wait for the process to finish
process.waitFor()
```

In this example, we use `Runtime.exec()` to run the `curl` command and retrieve the JSON response from the GitHub API. We then read the output and wait for the process to finish.