In Swift, a mixin is a way to add functionality to classes, structs, or protocols without changing their original code. It allows you to reuse code across multiple entities.

Here's an example of how to use Mixin in Swift:

```
protocol Alertable {
   func showAlert(title: String, message: String)
}

extension Alertable where Self: UIViewController {
   func showAlert(title: String, message: String) {
      let alert = UIAlertController(title: title, message: message, preferredStyle: .alert)
      alert.addAction(UIAlertAction(title: "OK", style: .default, handler: nil))
      present(alert, animated: true, completion: nil)
   }
}

class ExampleViewController: UIViewController, Alertable {

   override func viewDidLoad() {
      super.viewDidLoad()
      
      showAlert(title: "Title", message: "Message")
   }
}
```

In this example, we have defined a `protocol` called `Alertable`, which defines an abstract method `showAlert`. Then, we used an `extension` on `Alertable` to provide default implementation of this method, which can only be used on `UIViewControllers`. This `extension` acts as a Mixin and adds alert functionality to all `UIViewControllers` that conform to `Alertable` protocol.

Finally, we created a class `ExampleViewController`, which inherits from `UIViewController` and also conforms to `Alertable`. In the `viewDidLoad()` method of `ExampleViewController`, we called `showAlert` method, which was defined in the `Alertable` protocol and implemented in the `extension` we created.

The use of Mixins helps us minimize code duplication and improve the flexibility and maintainability of our code.