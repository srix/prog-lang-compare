In PHP, there are several functions to generate a random number. Here are some of the most commonly used ones:

1. rand(): This function generates a random integer between a specified minimum and maximum value.
Example: `rand(1, 100);` This will generate a random number between 1 and 100.

2. mt_rand(): This is similar to the rand() function but is considered to be more random.
Example: `mt_rand(1, 100);` This will also generate a random number between 1 and 100.

3. random_int(): This function generates a cryptographically secure random integer between a specified minimum and maximum value.
Example: `random_int(1, 100);` This will also generate a random number between 1 and 100.

4. random_bytes(): This function generates a random string of bytes.
Example: `echo bin2hex(random_bytes(4));` This will generate a random string of 4 bytes and convert it to hexadecimal.

It is important to use the appropriate function depending on your use case. For instance, if you need a secure random number for encryption purposes, it is recommended to use the random_int() function.