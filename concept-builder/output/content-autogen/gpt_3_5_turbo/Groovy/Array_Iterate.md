There are different ways to iterate over an array in Groovy. Here are some examples:

1. Using a for loop:

```
def myArray = ['apple', 'banana', 'cherry']
for (i in 0..<myArray.size()) {
    println myArray[i]
}
```

This will output:
```
apple
banana
cherry
```

2. Using a for each loop:

```
def myArray = ['apple', 'banana', 'cherry']
myArray.each { println it }
```

This will output:
```
apple
banana
cherry
```

3. Using a for each loop with index:

```
def myArray = ['apple', 'banana', 'cherry']
myArray.eachWithIndex { item, index -> 
    println "Index ${index}: ${item}" 
}
```

This will output:
```
Index 0: apple
Index 1: banana
Index 2: cherry
```

4. Using a while loop:

```
def myArray = ['apple', 'banana', 'cherry']
def i = 0
while (i < myArray.size()) {
    println myArray[i]
    i++
}
```

This will output:
```
apple
banana
cherry
```

All of these methods allow you to iterate over an array in Groovy. Choose the one that suits your needs best.