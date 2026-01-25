To run a command in Haskell, you need to first have the Haskell platform installed on your system.

Once you have that installed, you can follow these steps:

1. Open up your preferred text editor or IDE and create a new file with a `.hs` extension (e.g. "myFile.hs").

2. Write your Haskell code in this file, making sure to include the necessary modules and functions you'll be using.

3. Save the file in a convenient location on your computer.

4. Open up the command prompt or terminal on your machine.

5. Navigate to the directory where your Haskell file is located. 

6. Once you are in the directory, type the command `ghc` followed by the name of your file, like this:

   ```
   ghc myFile.hs
   ```

7. This will compile your Haskell code into an executable file. You should see a new file in the same directory as your `.hs` file, named something like `myFile.exe`.

8. To run the executable, simply type its name into the command prompt and press Enter. For example:

   ```
   myFile.exe
   ```

Here is an example of how this would work with a simple "Hello World" program in Haskell:

1. Open up your text editor and create a new file with the following content:

   ```
   module Main where

   main = putStrLn "Hello, World!"
   ```

2. Save this file as "hello.hs".

3. Open up your command prompt or terminal and navigate to the directory where `hello.hs` is saved.

4. Type the command `ghc hello.hs` and press Enter.

5. Once the compilation process is finished and an executable file has been generated, type the command `hello.exe` and press Enter.

6. You should see the output "Hello, World!" printed in the command prompt or terminal.
