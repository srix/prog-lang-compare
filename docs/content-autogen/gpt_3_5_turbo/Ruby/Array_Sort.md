In Ruby, you can sort an array using various built-in methods. Here are some of the most commonly used methods for sorting an array:

1. `sort`: This method returns a new array that contains the sorted elements of the original array.

    ```ruby
    array = [3, 2, 1, 4, 5]
    sorted_array = array.sort
    puts sorted_array
    # Output: [1, 2, 3, 4, 5]
    ```

2. `sort_by`: This method allows you to sort an array based on a specific criterion. You can pass a block to this method that specifies how the elements should be sorted.

    ```ruby
    array = ['apple', 'banana', 'cat', 'dog']
    sorted_array = array.sort_by { |element| element.length }
    puts sorted_array
    # Output: ["cat", "dog", "apple", "banana"]
    ```

3. `sort!`: This method modifies the original array in place and sorts it.

    ```ruby
    array = [3, 2, 1, 4, 5]
    array.sort!
    puts array
    # Output: [1, 2, 3, 4, 5]
    ```

4. `reverse`: This method returns a new array that contains the elements of the original array in reverse order.

    ```ruby
    array = [3, 2, 1, 4, 5]
    reversed_array = array.reverse
    puts reversed_array
    # Output: [5, 4, 1, 2, 3]
    ```

5. `shuffle`: This method returns a new array that contains the elements of the original array in a random order.

    ```ruby
    array = [3, 2, 1, 4, 5]
    shuffled_array = array.shuffle
    puts shuffled_array
    # Output: [2, 4, 5, 1, 3]
    ```

These are just a few of the most commonly used methods for sorting an array in Ruby.