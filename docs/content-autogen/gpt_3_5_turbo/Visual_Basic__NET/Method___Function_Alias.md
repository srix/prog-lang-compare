In Visual Basic .NET, an alias is used to create a short name for a longer name or a fully qualified name. Using an alias can make it easier to refer to namespaces, types, or class members that have long names.

To use an alias in Visual Basic .NET, you can use the 'Imports' statement followed by an alias name and the fully qualified name of the namespace, type, or class member that you want to create an alias for. Here is an example:

```vb.net
Imports System.Windows.Forms.Button  'Creates an alias for the Button class in the System.Windows.Forms namespace'

Public Class Form1
    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        'Create a button object using the alias name'
        Dim btn As New Button
        'Set button properties'
        btn.Text = "Click Me"
        btn.Location = New Point(50, 50)
        'Add the button to the form'
        Me.Controls.Add(btn)
    End Sub
End Class
```

In this example, we created an alias called 'Button' for the System.Windows.Forms.Button class using the 'Imports' statement. We then used the alias name 'Button' to create a new button object, set its properties, and add it to the form.

Another example of using an alias is when you need to differentiate between two members with the same name but in different namespaces. Here is an example:

```vb.net
Imports Math = System.Math
Imports CustomMath = MyCompany.MyProduct.Math

Public Class Form1
    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        'Use the Math alias to call the PI constant from the System.Math namespace'
        MessageBox.Show(Math.PI)
        'Use the CustomMath alias to call the PI constant from the MyCompany.MyProduct.Math namespace'
        MessageBox.Show(CustomMath.PI)
    End Sub
End Class
```

In this example, we created two aliases, 'Math' and 'CustomMath', for two different namespaces that contain a member with the same name 'PI'. We then used the aliases to call the PI constant from each namespace.