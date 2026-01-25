In Java, the `java.time` package was introduced in Java 8 to provide improved date and time processing capabilities. Here's how you can use it to work with time:

1. Get the current time:

```java
LocalTime currentTime = LocalTime.now();
System.out.println("The current time is: " + currentTime);
```

Output:
```
The current time is: 11:20:03.456
```

2. Create a specific time:

```java
LocalTime specificTime = LocalTime.of(8, 30);
System.out.println("A specific time is: " + specificTime);
```

Output:
```
A specific time is: 08:30
```

3. Add one hour to a time:

```java
LocalTime specificTime = LocalTime.of(8, 30);
LocalTime newTime = specificTime.plusHours(1);
System.out.println("The new time is: " + newTime);
```

Output:
```
The new time is: 09:30
```

4. Calculate the difference between two times:

```java
LocalTime firstTime = LocalTime.of(10, 30);
LocalTime secondTime = LocalTime.of(11, 45);
Duration duration = Duration.between(firstTime, secondTime);
System.out.println("The duration between the times is: " + duration);
```

Output:
```
The duration between the times is: PT1H15M
```

Here, `PT1H15M` means one hour and fifteen minutes.

5. Parse a time in a specific format:

```java
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss");
LocalTime parsedTime = LocalTime.parse("15:30:45", formatter);
System.out.println("Parsed time is: " + parsedTime);
```

Output:
```
Parsed time is: 15:30:45
```

Here, we first created a formatter that defines the pattern of the time. Then, we parsed a time string based on this pattern.

These are some of the ways you can work with time in Java using the `java.time` package.