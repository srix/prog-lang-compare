A hash in Perl is a collection of key-value pairs. It is a powerful data structure that allows you to store, retrieve, and manipulate data in a flexible way. Here's an example of how to create a hash in Perl:

```perl
%hash = (
    "key1" => "value1",
    "key2" => "value2",
    "key3" => "value3",
);
```

In this example, we've created a hash called `%hash` with three key-value pairs. The keys are "key1", "key2", and "key3", and the corresponding values are "value1", "value2", and "value3" respectively.

You can also use the `=>` symbol instead of a comma to create a hash:

```perl
%hash = (
    key1 => "value1",
    key2 => "value2",
    key3 => "value3",
);
```

In this example, we've created the same hash as before, but with a slightly different syntax.

Once you've created a hash, you can access its values by using the keys. Here's an example:

```perl
print $hash{"key1"}; # prints "value1"
```

In this example, we're using the key "key1" to access the corresponding value "value1" in the hash `%hash`. We use the curly braces `{}` to enclose the key inside the hash. 

You can also add more key-value pairs to a hash after it has been created:

```perl
$hash{"key4"} = "value4";
```

In this example, we're adding a new key-value pair to the hash `%hash`. The new key is "key4", and the corresponding value is "value4".

These are just a few examples of how to create and use hashes in Perl. With this powerful data structure, you can store and manipulate data in a flexible way that makes your code more dynamic and efficient.