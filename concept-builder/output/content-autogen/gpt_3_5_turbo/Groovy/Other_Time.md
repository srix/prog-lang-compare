Groovy provides multiple ways to work with time. Here are some examples:

1. Getting Current Time:

To get the current time in Groovy, we can use the `TimeCategory` class which is part of Groovy's DateTime API:

```groovy
use(groovy.time.TimeCategory) {
    def now = new Date()
    println "Current time is ${now.format('HH:mm:ss')}"
}
```

Output: `Current time is 14:10:24`

2. Adding Time:

We can add time to a given date using the `plus()` method. For example, to add 1 hour to the current time:

```groovy
use(groovy.time.TimeCategory) {
    def now = new Date()
    def oneHourLater = now.plus(hours: 1)
    println "One hour later from now is ${oneHourLater.format('HH:mm:ss')}"
}
```

Output: `One hour later from now is 15:10:24`

Similarly, we can add minutes, seconds, days, weeks, months, or years as needed.

3. Comparing Dates:

Groovy's `Date` class provides methods to compare dates. For example, to check if a date is before or after another date:

```groovy
def today = new Date()
def tomorrow = today.plus(days: 1)

assert tomorrow > today
assert today < tomorrow
```

4. Parsing Dates:

Groovy provide various ways to parse dates from strings. For example, to parse a date from a string using a specific date format:

```groovy
use(groovy.time.TimeCategory) {
    def dateString = "2021-07-01"
    def format = "yyyy-MM-dd"
    
    def date = Date.parse(format, dateString)

    println "Parsed date: ${date.format('dd-MM-yyyy')}"
}
```

Output: `Parsed date: 01-07-2021`

These are some of the examples of using time in Groovy.