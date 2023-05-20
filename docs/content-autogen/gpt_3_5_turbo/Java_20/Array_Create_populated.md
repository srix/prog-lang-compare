To create an array in Java of size 20, follow these steps:

1. Declare an array variable: 
int[] myArray;

2. Initialize the array by creating a new array of size 20:
myArray = new int[20];

3. You can also declare and initialize the array in one statement: 
int[] myArray = new int[20];

4. You can assign values to the array by using a for loop:

for (int i = 0; i < myArray.length; i++) {
   myArray[i] = i * 2; //this assigns values to the array, starting with 0 and incrementing by 2 for each element
}

5. To access individual elements of the array, use the index number in brackets:
int element7 = myArray[6]; //this assigns the 7th element of the array to the variable element7

Here is an example code snippet that creates an array of size 20 and assigns values to it:

```
public class ArrayExample {
   public static void main(String[] args) {
      int[] myArray = new int[20]; //create a new array of size 20
      
      for (int i = 0; i < myArray.length; i++) {
         myArray[i] = i * 2; //assign values to the array
      }
      
      //print out the array
      for (int i = 0; i < myArray.length; i++) {
         System.out.println(myArray[i]);
      }
   }
}
```