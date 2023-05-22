In Groovy, you can use the `java.util.Date` class to represent a specific date and time. Here are some examples:

1. Creating a Date object with the current date and time:

```groovy
def now = new Date()
```

2. Creating a Date object with a specific date and time:

```groovy
def myDate = new Date(2021, 10, 10, 10, 30, 0) // 10th November 2021 10:30:00
```

3. Formatting a Date object as a string:

```groovy
def formattedDate = now.format("dd MMM yyyy") // e.g. 10 Nov 2021
```

4. Converting a string to a Date object:

```groovy
def dateString = "2021-11-10"
def myDate = Date.parse("yyyy-MM-dd", dateString)
```

5. Comparing two Date objects:

```groovy
def date1 = new Date(2021, 10, 10)
def date2 = new Date(2021, 10, 11)
def result = date1.compareTo(date2) // -1 (date1 is before date2)
```