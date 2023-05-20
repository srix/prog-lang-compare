In Java, dates can be represented using the `Date` class, which is a part of the `java.util` package. Here are some examples of how to use the `Date` class in Java 20:

1. Creating a Date object:
```
Date currentDate = new Date();  // creates a new Date object with the current date and time
```
2. Formatting a date:
```
SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy"); // create a date format
String formattedDate = dateFormat.format(currentDate); // format the current date in the desired format
System.out.println("Formatted Date: " + formattedDate); // print the formatted date
```
3. Parsing a date string:
```
String dateStr = "01/01/2020"; // create a date string
SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy"); // create a date format to match the string format
Date parsedDate = dateFormat.parse(dateStr); // parse the date string using the date format
System.out.println("Parsed Date: " + parsedDate); // print the parsed date
```
4. Comparing dates:
```
Date earlierDate = new Date(119, 0, 1); // create a date for Jan 1, 2019
Date laterDate = new Date(); // create a date object for the current date and time
if (earlierDate.compareTo(laterDate) < 0) {
    System.out.println(earlierDate + " is earlier than " + laterDate);
} else if (earlierDate.compareTo(laterDate) > 0) {
    System.out.println(earlierDate + " is later than " + laterDate);
} else {
    System.out.println(earlierDate + " and " + laterDate + " are equal");
}
```
These are just a few examples of how to use the `Date` class in Java. There are many more ways to work with dates, such as adding and subtracting time, managing time zones, and more. It's important to be familiar with the `Date` class and its methods if you want to work with dates in Java.