Sure, here's how to create a string in Groovy.

In Groovy, a string can be created using single or double quotes:

```groovy
def myString1 = 'Hello World'    // single quotes
def myString2 = "Hello World"    // double quotes
```

Both myString1 and myString2 are equivalent strings in Groovy.

We can also use triple single or double quotes to create a multi-line string:

```groovy
def myString3 = '''This is 
a multi-line 
string'''
def myString4 = """This is 
a multi-line 
string"""
```

Both myString3 and myString4 are equivalent multi-line strings.

In addition, Groovy supports string interpolation using the "${}" syntax:

```groovy
def name = "Alice"
def age = 30
def myString5 = "My name is ${name} and I'm ${age} years old"
```

Here, myString5 will be "My name is Alice and I'm 30 years old".