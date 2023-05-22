In PHP, we can iterate over an array with index using the `foreach` loop or a traditional `for` loop. 

Using `foreach` loop:

```
$fruits = array("apple", "banana", "mango", "orange");

foreach($fruits as $index => $fruit) {
  echo "Index: " . $index . ", Fruit: " . $fruit . "<br>";
}
```

Output:

```
Index: 0, Fruit: apple
Index: 1, Fruit: banana
Index: 2, Fruit: mango
Index: 3, Fruit: orange
```

Using `for` loop:

```
$fruits = array("apple", "banana", "mango", "orange");
 
for($i = 0; $i < count($fruits); $i++) {
   echo "Index: " . $i . ", Fruit: " . $fruits[$i] . "<br>";
}
```

Output:

```
Index: 0, Fruit: apple
Index: 1, Fruit: banana
Index: 2, Fruit: mango
Index: 3, Fruit: orange
```

In both cases, we are iterating over the array and printing the index and element value of each item. In the `foreach` loop, we use the `$index` variable to hold the index of the current item as we iterate over the array. In the `for` loop, we use the `$i` variable to keep track of the current index as we iterate over the array.