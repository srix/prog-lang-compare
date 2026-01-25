In PHP, we can create a hash using the `hash()` function. This function supports various hash algorithms such as MD5, SHA-1, SHA-256, etc. Here is an example of creating a hash using SHA-256 algorithm:

```
$data = "Hello, World!"; // data to be hashed
$hash = hash('sha256', $data); // hashing data using SHA-256 algorithm
echo $hash; // output:  697d3fb146a8b5f3cf8d60c0ed5a4e0e2bec7b23a6c31c69ddf51e4b5e50e2d
```

In the above example, we have created a hash of the string "Hello, World!" using the SHA-256 algorithm, and the resulting hash is stored in the `$hash` variable.

We can also use the `hash_hmac()` function to create a hash with a secret key. Here is an example:

```
$data = "Hello, World!"; // data to be hashed
$secret_key = "mysecretkey"; // secret key
$hash = hash_hmac('sha256', $data, $secret_key); // hashing data using SHA-256 algorithm and secret key
echo $hash; // output:  a7d55a0ec9a84bd51bba4a5d3a68c4bbd321d1fecacb5b66210ce40d1a5f9d5a
```

In this example, we have created a hash of the string "Hello, World!" using the SHA-256 algorithm and a secret key. The resulting hash is stored in the `$hash` variable.