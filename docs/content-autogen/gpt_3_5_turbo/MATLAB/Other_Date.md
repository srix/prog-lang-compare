In MATLAB, the `datetime` data type allows manipulation of date and time values. Here are some examples on how to use it:

1. Creating a datetime object: 

```
% create a datetime object for a specific date and time
dt = datetime(2022, 01, 01, 12, 0, 0); 

% create a datetime object from a string
dt = datetime('2022-01-01 12:00:00', 'InputFormat', 'yyyy-MM-dd HH:mm:ss'); 
```

2. Extracting information from datetime object: 

```
% day of the month
day = day(dt);

% month of the year
month = month(dt);

% year
year = year(dt);

% hour
hour = hour(dt);

% minute
minute = minute(dt);

% second
second = second(dt);
```

3. Performing arithmetic operations on datetime objects: 

```
% add or subtract a specific number of days to/from datetime object
new_dt = dt + days(7); % add 7 days
new_dt = dt - days(7); % subtract 7 days

% add or subtract a specific number of hours to/from datetime object
new_dt = dt + hours(2); % add 2 hours
new_dt = dt - hours(2); % subtract 2 hours
```

4. Formatting datetime object: 

```
% convert datetime object to string
dt_str = datestr(dt, 'yyyy-mm-dd HH:MM:SS');

% display datetime object in a specific format
disp(datestr(dt, 'mmm dd, yyyy')); % output: Jan 01, 2022
```