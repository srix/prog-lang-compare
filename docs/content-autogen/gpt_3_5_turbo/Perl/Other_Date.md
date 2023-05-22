In Perl, to work with dates, we use the built-in module "DateTime". Here are some examples of how to use it:

Example 1: Get current date

```
use DateTime;
my $dt = DateTime->now; #get current date
print "$dt\n"; #prints something like "2021-10-12T18:24:00"
```

Example 2: Create a specific date

```
use DateTime;
my $dt = DateTime->new(year => 2021, month => 10, day => 12);
print "$dt\n"; #prints "2021-10-12T00:00:00"
```

Example 3: Format date

```
use DateTime;
my $dt = DateTime->now;
print $dt->ymd; #prints "2021-10-12"
print $dt->mdy; #prints "10-12-2021"
```

Example 4: Add or subtract time from a date

```
use DateTime;
my $dt = DateTime->new(year => 2021, month => 10, day => 12);
$dt->add(days => 7); #add 7 days
print "$dt\n"; #prints "2021-10-19T00:00:00"
$dt->subtract(months => 1); #subtract 1 month
print "$dt\n"; #prints "2021-09-19T00:00:00"
```

There are many more methods and options available in the DateTime module. It is flexible and powerful, allowing you to handle dates and time in various ways.