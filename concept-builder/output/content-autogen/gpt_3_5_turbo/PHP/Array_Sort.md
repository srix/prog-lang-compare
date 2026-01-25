Sure! Sorting an array in PHP can be done using a number of different built-in functions. Here are some examples of commonly used ones:

1. `sort()`: This function sorts an array in ascending order by value.

```php
$fruits = array("Banana", "Apple", "Orange");
sort($fruits);
echo implode(", ", $fruits);
```

Output: `Apple, Banana, Orange`

2. `rsort()`: This function sorts an array in descending order by value.

```php
$fruits = array("Banana", "Apple", "Orange");
rsort($fruits);
echo implode(", ", $fruits);
```

Output: `Orange, Banana, Apple`

3. `asort()`: This function sorts an array in ascending order by value, while maintaining key-value associations.

```php
$age = array("John" => 25, "Mary" => 20, "Bob" => 30);
asort($age);
foreach($age as $key => $val) {
    echo "$key : $val\n";
}
```

Output:

```
Mary : 20
John : 25
Bob : 30
```

4. `arsort()`: This function sorts an array in descending order by value, while maintaining key-value associations.

```php
$age = array("John" => 25, "Mary" => 20, "Bob" => 30);
arsort($age);
foreach($age as $key => $val) {
    echo "$key : $val\n";
}
```

Output:

```
Bob : 30
John : 25
Mary : 20
```

5. `ksort()`: This function sorts an array in ascending order by key.

```php
$age = array("John" => 25, "Mary" => 20, "Bob" => 30);
ksort($age);
foreach($age as $key => $val) {
    echo "$key : $val\n";
}
```

Output:

```
Bob : 30
John : 25
Mary : 20
```

6. `krsort()`: This function sorts an array in descending order by key.

```php
$age = array("John" => 25, "Mary" => 20, "Bob" => 30);
krsort($age);
foreach($age as $key => $val) {
    echo "$key : $val\n";
}
```

Output:

```
Mary : 20
John : 25
Bob : 30
```

I hope this helps! Let me know if you have any further questions.