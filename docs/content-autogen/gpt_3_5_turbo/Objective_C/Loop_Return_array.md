In Objective-C, you can return an array in two ways:

1. Using C Array - You can create a C array and return it from a method. Here is an example:
```
#import <Foundation/Foundation.h>

int *createArray(int count) {
    int *arr = malloc(sizeof(int) * count);
    for (int i = 0; i < count; i++) {
        arr[i] = i;
    }
    return arr;
}

int main() {
    int *arr = createArray(5);
    for (int i = 0; i < 5; i++) {
        NSLog(@"%d", arr[i]);
    }
    free(arr);
    return 0;
}
```

2. Using NSArray Class - You can use the NSArray class to create an array and return it from a method. Here is an example:
```
#import <Foundation/Foundation.h>

NSArray* getArray() {
    NSArray *array = @[ @1, @2, @3 ];
    return array;
}

int main() {
    NSArray *arr = getArray();
    NSLog(@"%@", arr);
    return 0;
}
```
Note that the returned array is an instance of class NSArray. The `@[]` syntax is used to create an NSArray object with some initial values.