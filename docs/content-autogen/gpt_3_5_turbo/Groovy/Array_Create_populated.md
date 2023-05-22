In Groovy, we can create an array using the following syntax:

```groovy
def myArray = [element1, element2, ..., elementN]
```

Here is an example of creating an array of integers:

```groovy
def myIntArray = [1, 2, 3, 4, 5]
```

And here is an example of creating an array of strings:

```groovy
def myStringArray = ['apple', 'banana', 'orange', 'grape', 'watermelon']
```

We can also create an empty array and add elements to it later:

```groovy
def myEmptyArray = []
myEmptyArray.add('element1')
myEmptyArray.add('element2')
```

It's important to note that Groovy is dynamically typed, so arrays can also contain elements of different types. For example:

```groovy
def myMixedArray = ['apple', 2, true, 4.5, 'orange']
```