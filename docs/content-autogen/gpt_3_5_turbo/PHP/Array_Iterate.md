In PHP, we can iterate over an array using various loops, namely `for`, `foreach`, `while` and `do-while`. Here are some examples:

1. Using the `for` loop:
```
$fruits = array('apple', 'banana', 'cherry', 'orange', 'grape');
$len = count($fruits);
for ($i = 0; $i < $len; $i++) {
    echo $fruits[$i] . "<br/>";
}
```

2. Using the `foreach` loop:
```
$fruits = array('apple', 'banana', 'cherry', 'orange', 'grape');
foreach ($fruits as $fruit) {
    echo $fruit . "<br/>";
}
```

3. Using the `while` loop:
```
$fruits = array('apple', 'banana', 'cherry', 'orange', 'grape');
$len = count($fruits);
$i = 0;
while ($i < $len) {
    echo $fruits[$i] . "<br/>";
    $i++;
}
```

4. Using the `do-while` loop:
```
$fruits = array('apple', 'banana', 'cherry', 'orange', 'grape');
$len = count($fruits);
$i = 0;
do {
    echo $fruits[$i] . "<br/>";
    $i++;
} while ($i < $len);
```

All the above examples will output the same result, which is a list of fruits on separate lines (assuming `"<br/>"` is properly interpreted).