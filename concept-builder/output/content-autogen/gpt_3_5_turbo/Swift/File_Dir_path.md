In Swift, you can get the directory path using the `FileManager` class. There are several ways to get the directory path in Swift depending on the specific directory you need. Here are some examples:

1. Get the documents directory path:

```swift
let fileManager = FileManager.default
let documentsUrl = try! fileManager.url(for: .documentDirectory, in: .userDomainMask, appropriateFor: nil, create: false)
let documentsPath = documentsUrl.path
print("Documents Directory: \(documentsPath)")
```

2. Get the application support directory path:

```swift
let fileManager = FileManager.default
let applicationSupportUrl = try! fileManager.url(for: .applicationSupportDirectory, in: .userDomainMask, appropriateFor: nil, create: false)
let applicationSupportPath = applicationSupportUrl.path
print("Application Support Directory: \(applicationSupportPath)")
```

3. Get the caches directory path:

```swift
let fileManager = FileManager.default
let cachesUrl = try! fileManager.url(for: .cachesDirectory, in: .userDomainMask, appropriateFor: nil, create: false)
let cachesPath = cachesUrl.path
print("Caches Directory: \(cachesPath)")
```

These examples show how to get the path for three different directories, but there are other directories to choose from as well, such as the temporary directory, the downloads directory or the desktop directory. To get the path of a different directory, simply replace the `for` parameter of the `url(for:in:appropriateFor:create:)` method with the appropriate constant.