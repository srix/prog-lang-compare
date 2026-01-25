In PHP, you can use the time() function to get the current Unix timestamp. A Unix timestamp is the number of seconds that have elapsed since January 1, 1970. You can use this timestamp to perform calculations with time and dates.

Here are some examples of using time in PHP:

1. Get the current Unix timestamp:

```
$timestamp = time();
echo $timestamp;
```

2. Convert a Unix timestamp to a formatted date:

```
$timestamp = 1628206588;
$date = date('Y-m-d H:i:s', $timestamp);
echo $date;
```

Output: 2021-08-05 20:29:48

3. Add or subtract a specified number of seconds from a Unix timestamp:

```
$timestamp = time();
$new_time = $timestamp + (60 * 60 * 24); // Add one day
echo date('Y-m-d H:i:s', $new_time);
```

Output: the current date and time tomorrow

4. Find the number of days between two dates:

```
$date1 = "2021-08-01";
$date2 = "2021-08-05";
$days_between = ceil((strtotime($date2) - strtotime($date1)) / (60 * 60 * 24));
echo $days_between;
```

Output: 5

These are just a few examples of how you can use time in PHP. With time functions and calculations, you can manipulate dates and times to create dynamic and customized applications.