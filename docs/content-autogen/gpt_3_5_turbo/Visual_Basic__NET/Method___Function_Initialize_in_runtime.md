In Visual Basic .NET, you can initialize a method or function at runtime by using the AddHandler statement. This statement allows you to add a delegate to a method or function at runtime, essentially creating a dynamic event handler. To better understand this concept, let's walk through an example.

For this example, let's say you have a button on a form, and you want to assign a method to the Click event of the button at runtime. First, you need to define the method you want to assign. Here's an example method that simply displays a message box:

```
Private Sub ButtonClicked(sender As Object, e As EventArgs)
    MessageBox.Show("Button Clicked!")
End Sub
```

Then, in the Form_Load event, you can use the AddHandler statement to assign this method to the Click event of the button:

```
Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load
    Dim btn As New Button()
    btn.Text = "Click Me!"
    AddHandler btn.Click, AddressOf ButtonClicked
    Me.Controls.Add(btn)
End Sub
```

In this example, we create a new Button dynamically and assign it the text "Click Me!" We then use the AddHandler statement to assign the ButtonClicked method to the Click event of the button. Finally, we add the button to the form's Controls collection.

Now, when the user clicks the button, the ButtonClicked method will be executed and a message box will be displayed.

In summary, to initialize a method or function at runtime in Visual Basic .NET, you can use the AddHandler statement to add a delegate to the desired event. This allows you to dynamically assign methods to events at runtime, creating more flexible and dynamic code.