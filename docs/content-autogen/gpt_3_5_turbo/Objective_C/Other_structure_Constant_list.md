In Objective-C, a constant list is a collection of fixed values that do not change throughout the flow of the program. These lists can be defined using the `NS_ENUM` macro or the `NS_OPTIONS` macro depending on the intended usage.

Here is an example of how to use constant list using the `NS_ENUM` macro:

```
typedef NS_ENUM(NSInteger, Month) {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
};
```

In this example, we've defined a constant list of all 12 months of the year. The `NS_ENUM` macro generates an enumeration of type `NSInteger` with the specified identifier `Month`. This enumeration is a list of constants that represent each month.

Here is an example of how to use constant list using the `NS_OPTIONS` macro:

```
typedef NS_OPTIONS(NSUInteger, Colors) {
    Red = 1 << 0,
    Green = 1 << 1,
    Blue  = 1 << 2,
    Yellow = Red | Green,
    Magenta = Red | Blue,
    Cyan = Green | Blue,
    White = Red | Green | Blue
};
```

In this example, we've defined a constant list of different colors. The `NS_OPTIONS` macro generates an enumeration of type `NSUInteger` with the specified identifier `Colors`. This enumeration is a list of bit-masks that represent different combinations of colors.

In both examples, we've defined a set of fixed values that can be used throughout our program. Using these constant lists can make code more readable, easier to maintain, and more predictable. When you need to use one of the values, you simply reference it by name, like this: `Month.January` or `Colors.Red`.