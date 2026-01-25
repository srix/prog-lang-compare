In Groovy, the `for` loop is used to execute a set of code repeatedly for a defined number of times or for each element in a collection.

Here are some examples to illustrate the use of `for` in Groovy:

1. Looping through a range of numbers:

```
for (i in 1..5) {
    println(i)
}
```
Output:
```
1
2
3
4
5
```
In this code, `for` loop executes five times for each value of `i` between 1 and 5.

2. Looping through a collection:

```
def cities = ['New York', 'London', 'Paris']

for (city in cities) {
   println(city)
}
```
Output:
```
New York
London
Paris
```
In this code, `for` loop iterates through the `cities` list and prints each element.

3. Looping through key-value pairs of a Map:

```
def person = [name: "John", age: 30, city: "New York"]

for (entry in person) {
    println("${entry.key} = ${entry.value}")
}
```
Output:
```
name = John
age = 30
city = New York
```
In this code, `for` loop iterates through the `person` map and prints each key-value pair.

4. Looping with a step:

```
for (i in 0..10 step 2) {
   println(i)
}
```
Output:
```
0
2
4
6
8
10
```
In this code, `for` loop iterates through the range from 0 to 10 with a step of 2, printing every second number.

These are just a few examples of how to use the `for` loop in Groovy. It's a powerful tool that can help you iterate through data efficiently and perform complex operations.