In Perl, you can use the built-in `time()` function to retrieve the current Unix timestamp, which represents the number of seconds that have elapsed since January 1, 1970.

Here's an example of how to use `time()`:

```perl
my $current_time = time(); # retrieves the current Unix timestamp
print "Current Unix timestamp: $current_time\n";
```

You can also use the `gmtime()` function to convert a Unix timestamp into a date and time in Coordinated Universal Time (UTC) format:

```perl
my $timestamp = 1622120701;
my ($sec, $min, $hour, $day, $month, $year) = gmtime($timestamp);
$year += 1900; # adjust the year to the common era
$month++; # adjust the month to be 1-based
printf "The timestamp %d is equivalent to %04d-%02d-%02d %02d:%02d:%02d UTC\n",
       $timestamp, $year, $month, $day, $hour, $min, $sec;
```

Output:
```
The timestamp 1622120701 is equivalent to 2021-05-27 16:11:41 UTC
```

You can also use the `localtime()` function to convert a Unix timestamp into a date and time in the local time zone:

```perl
my $timestamp = 1622120701;
my ($sec, $min, $hour, $day, $month, $year) = localtime($timestamp);
$year += 1900; # adjust the year to the common era
$month++; # adjust the month to be 1-based
printf "The timestamp %d is equivalent to %04d-%02d-%02d %02d:%02d:%02d in the local time zone\n",
       $timestamp, $year, $month, $day, $hour, $min, $sec;
```

Output:
```
The timestamp 1622120701 is equivalent to 2021-05-27 23:11:41 in the local time zone
```

Note that `gmtime()` and `localtime()` both return an array of values that represent the second, minute, hour, day of the month, month (0-11), and year (since 1900). You need to increment the month by one and add 1900 to the year to get the correct date and time.