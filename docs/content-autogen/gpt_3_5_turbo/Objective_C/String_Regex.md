Regex stands for Regular Expression. It is a sequence of characters that form a search pattern. Regex is used to search, replace, and validate text based on a certain pattern.

In Objective-C, regex is implemented through the NSRegularExpression class which provides methods for regex search and replacement.

Here are some examples of using regex in Objective-C:

1. Search for a pattern in a string and return all matches:

```objective-c
NSString *str = @"The quick brown fox jumps over the lazy dog";
NSRegularExpression *regex = [NSRegularExpression regularExpressionWithPattern:@"[aeiouy]" options:NSRegularExpressionCaseInsensitive error:nil];
NSArray *matches = [regex matchesInString:str options:0 range:NSMakeRange(0, str.length)];

for (NSTextCheckingResult *match in matches) {
    NSLog(@"%@", [str substringWithRange:match.range]);
}

// Output: e u i o o u o e a
```

In this example, the regex pattern `[aeiouy]` searches for all vowels in the given string. The `options` parameter specifies that the search should not be case-sensitive. The method `matchesInString` returns an array of `NSTextCheckingResult` objects which contain the range of each match. The `substringWithRange` method is then used to extract the matched substring from the original string.

2. Replace all occurrences of a pattern with a replacement string:

```objective-c
NSString *str = @"Hello, world!";
NSRegularExpression *regex = [NSRegularExpression regularExpressionWithPattern:@"world" options:NSRegularExpressionCaseInsensitive error:nil];
NSString *result = [regex stringByReplacingMatchesInString:str options:0 range:NSMakeRange(0, str.length) withTemplate:@"universe"];

NSLog(@"%@", result);

// Output: Hello, universe!
```

In this example, the regex pattern `world` is used to search for the word "world" in the given string. The `stringByReplacingMatchesInString` method then replaces all occurrences of the pattern with the replacement string "universe".

3. Validate a string against a pattern:

```objective-c
NSString *str = @"example@gmail.com";
NSRegularExpression *regex = [NSRegularExpression regularExpressionWithPattern:@"\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}\\b" options:NSRegularExpressionCaseInsensitive error:nil];
BOOL isValidEmail = [regex firstMatchInString:str options:0 range:NSMakeRange(0, str.length)] != nil;

NSLog(@"%@", isValidEmail ? @"Valid email" : @"Invalid email");

// Output: Valid email
```

In this example, the regex pattern `\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b` is used to validate an email address. The `firstMatchInString` method returns the first match of the pattern in the given string, or nil if there is no match. The Boolean variable `isValidEmail` is then set based on whether a match was found.