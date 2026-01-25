In PHP, we can iterate or loop through a hash using different ways. Here are some of the common methods:

1. foreach Loop: It allows us to loop through each key-value pair in the hash one by one. We can use this loop to access each key and value or both using the key-value pair syntax.

    ```php
    <?php
        $hash = array('key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3');
        foreach ($hash as $key => $value) {
            echo "$key => $value\n";
        }
    ?>
    ```

    Output:
    ```
    key1 => value1
    key2 => value2
    key3 => value3
    ```

2. while loop: We can also use a while loop to iterate over a hash by using the `each()` function to return each key-value pair in the hash one by one. This approach is useful since it allows us to modify the hash within the loop.

    ```php
    <?php
        $hash = array('key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3');
        reset($hash);
        while (list($key,$value) = each($hash)) {
            echo "$key => $value\n";
        }
    ?>
    ```

    Output:
    ```
    key1 => value1
    key2 => value2
    key3 => value3
    ```

3. for loop: We can use a for loop to iterate over a hash by using the `count()` function to get the number of elements in the hash and using the `array_keys()` function to get an array of all the keys in the hash.

    ```php
    <?php
        $hash = array('key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3');
        $keys = array_keys($hash);
        for ($i = 0; $i < count($keys); $i++) {
            echo "$keys[$i] => $hash[$keys[$i]]\n";
        }
    ?>
    ```

    Output:
    ```
    key1 => value1
    key2 => value2
    key3 => value3
    ```

These are some of the ways to iterate over a hash in PHP. You can choose the method that works best for your particular situation.