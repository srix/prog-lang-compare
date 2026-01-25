In Ruby, to assign a value if it doesn't exist, we can use the `||=` operator or the `fetch()` method.

The `||=` operator assigns a value to a variable only if that variable is `nil` or `false`. Here's an example:

```
my_var ||= "default value"
```

In this example, `my_var` is assigned the value `"default value"` only if `my_var` is `nil` or `false`.

The `fetch()` method can also be used to assign a default value to a variable if it doesn't exist. Here's an example:

```
my_hash = {a: 1, b: 2}
my_var = my_hash.fetch(:c, "default value")
```

In this example, we're trying to fetch the value of the key `:c` from the hash `my_hash`. Since the key `:c` doesn't exist in the hash, `fetch()` returns the second argument, `"default value"`, which is then assigned to `my_var`.

Both of these methods can be helpful for setting default values in a program and avoiding errors caused by uninitialized variables.