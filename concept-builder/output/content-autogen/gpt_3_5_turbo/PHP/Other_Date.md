In PHP, the `date()` function is used to format a given date or to get the current date and time in a specified format. Here are some examples of how to use the `date()` function:

1. Get the current date and time in the default format:

```php
echo date('Y-m-d H:i:s'); // output: 2022-10-04 08:30:00
```

2. Format a specific date:

```php
$my_date = '2022-10-10';
echo date('l, F d, Y', strtotime($my_date)); // output: Monday, October 10, 2022
```

3. Get the current year:

```php
echo date('Y'); // output: 2022
```

4. Get the current month:

```php
echo date('m'); // output: 10
```

5. Get the current day:

```php
echo date('d'); // output: 04
```

6. Get the current time:

```php
echo date('h:i:s A'); // output: 08:30:00 AM
```

You can customize these formats to suit your needs by referring to the PHP documentation on the `date()` function for more options.