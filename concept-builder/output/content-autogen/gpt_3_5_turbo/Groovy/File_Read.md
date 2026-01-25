In Groovy, you can read files using several methods. Here are a few examples:

1. Using the FileReader Class:
```
def file = new File("filename.txt")
def reader = new FileReader(file)
def bufferedReader = new BufferedReader(reader)

while ((line = bufferedReader.readLine()) != null) {
    println(line)
}

reader.close()
```

2. Using the eachLine method(): 
```
def file = new File("filename.txt")
file.eachLine { line ->
    println(line)
}
```

3. Using the text method():
```
def file = new File("filename.txt")
def content = file.text
println(content)
```

All of these examples will read the contents of a file named "filename.txt" in the same directory as the Groovy script and print the contents to the console.