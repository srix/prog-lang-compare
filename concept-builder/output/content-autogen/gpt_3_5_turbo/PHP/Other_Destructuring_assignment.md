Destructuring assignment is a feature in PHP that allows you to extract elements from an array and assign them to variables in a single statement. This can be done using square brackets `[]` on the left-hand side of the assignment operator.

Here is an example of how destructuring assignment can be used with arrays in PHP:

```php
// Example 1:
[$a, $b] = [1, 2];
echo $a; // Output: 1
echo $b; // Output: 2

// Example 2:
$array = ['foo', 'bar', 'baz'];
[$first, , $last] = $array;
echo $first; // Output: foo
echo $last; // Output: baz
```

In Example 1 above, we are using destructuring assignment to assign the values from the array `[1, 2]` to the variables `$a` and `$b`. We could have also written this code as follows:

```php
$array = [1, 2];
$a = $array[0];
$b = $array[1];
```

In Example 2, we are skipping the second element in the array `$array` and only assigning the first and last elements to variables named `$first` and `$last`. Note that we are using a blank space on the left-hand side of the assignment operator to indicate that we want to skip the second element.

Destructuring assignment can also be used with associative arrays in PHP:

```php
// Example 3:
$user = [
    'name' => 'John Doe',
    'email' => 'johndoe@example.com',
    'phone' => '555-1234'
];

['name' => $name, 'email' => $email, 'phone' => $phone] = $user;
echo $name; // Output: John Doe
echo $email; // Output: johndoe@example.com
echo $phone; // Output: 555-1234
```

In Example 3, we are using destructuring assignment to extract the values of name, email, and phone from the associative array `$user` and assign them to variables named `$name`, `$email`, and `$phone`. We are using the `=>` operator to match the key in the array to the variable name on the left-hand side of the assignment operator.