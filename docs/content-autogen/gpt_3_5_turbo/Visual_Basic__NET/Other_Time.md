In Visual Basic .NET, you can use the `DateTime` structure to work with dates and times. Here's an example of how to get the current date and time:

```vb.net
Dim now As DateTime = DateTime.Now
MessageBox.Show("The current date and time is " & now.ToString())
```

You can also use the `TimeSpan` structure to represent a duration of time, such as the difference between two dates. Here's an example of how to calculate the difference between two dates:

```vb.net
Dim date1 As New DateTime(2020, 1, 1)
Dim date2 As New DateTime(2020, 12, 31)
Dim duration As TimeSpan = date2 - date1
MessageBox.Show("The duration between " & date1.ToString() & " and " & date2.ToString() & " is " & duration.TotalDays & " days.")
```

You can also use the `Timer` control to execute code at regular intervals. Here's an example of how to use the `Timer` control to update a label with the current time every second:

```vb.net
Public Class Form1
    Private Sub Timer1_Tick(sender As Object, e As EventArgs) Handles Timer1.Tick
        Label1.Text = DateTime.Now.ToString()
    End Sub
End Class
```

In this example, the `Timer` control is set to fire every second (set its `Interval` property to 1000). The `Tick` event handler updates the `Label1` control with the current date and time.