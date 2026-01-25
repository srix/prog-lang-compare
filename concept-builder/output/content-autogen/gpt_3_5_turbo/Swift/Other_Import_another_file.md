In Swift, you can import another file by using the `import` statement followed by the name of the file or module you want to import. Here's an example:

Suppose you have two files in your project: `MyModule.swift` and `MyProgram.swift`. If you want to import `MyModule.swift` into `MyProgram.swift`, you would use the following code at the top of `MyProgram.swift`:

```
import MyModule
```

This assumes that `MyModule.swift` is in the same folder as `MyProgram.swift` and that `MyModule.swift` declares a module called `MyModule`.

If `MyModule.swift` is in a different folder or location, you would need to specify the full path to the file in the import statement:

```
import /path/to/MyModule
```

Alternatively, you can import specific parts of a module by using the `import` statement followed by a dot `.` and the name of the specific part you want to import. For example:

```
import UIKit.UIView
```

This imports only the `UIView` class from the `UIKit` module.

Keep in mind that some modules may require additional setup or configuration in order to be imported successfully. Also, importing different modules or parts of modules can affect the efficiency and size of your application, so it's important to import only what you need.