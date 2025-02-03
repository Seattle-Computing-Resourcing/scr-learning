# Getting an IDE

If you use an online IDE such as [ide.usaco.guide](https://ide.usaco.guide) or [Replit](https://replit.com) you don't need to follow this part.

An IDE (short for Integrated Development Environment) allows you to edit and run code! This course uses Visual Studio Code (or VSCode) but there are many other good IDEs out there.

### Installing VSCode

Head to [this site](https://code.visualstudio.com/download) and follow the instructions for your system.

Then open VSCode.

### Installing Python

In VSCode, look at the left bar and select **"Extensions"**. Or, press *Ctrl + X*.

Type in "Python" and install the extensions called **"Python"** and **"Python Debugger"**.

# First Program

### A New File

Click "File" then "New Text File". Or, press *Ctrl + N*.

Press "Select a language".

Type in "Python" and select it.

### Coding

Then, you can type any code you wish in the file. For now, paste in:
```
print("Hello World!")
```
Congratulations- you've written your first code!

### Running the Code

To run the code, click on the triangle in the top right corner. You will initially need to save the code, do so anywhere you wish.

The code should output "Hello World!" to the terminal - found at the bottom of the screen.

# Error Messages

When you write code incorrectly, your IDE cannot run it; but, it usually can tell you what you did wrong.

As an example, remove the last parenthesis in your code from before, so it looks like:
```
print("Hello World!"
```
When you run this, Python will throw a **SyntaxError** and point to the line with the error (or close to it, such as this example). 

There are many other error types which we will get to later.

# Debugging

When a program gets complicated, it is very easy to make a mistake in the logic of the code. You will experience this many times in later lessons. Luckily, there is a way to fix such mistakes!

**Debugging** allows you to run through your code step-by-step and see the current state of the program.

### Breakpoints

First, you need a **breakpoint**. That is where the code will stop running so you can look at its state.

To make one, bring your cursor slightly to the left of the line numbers, and click. A small red circle should show up there.

To remove a breakpoint, just click on it.

### Triggering Debugging

Then you need to trigger your debugging.

To do this, click on the drop-down arrow by the run button; then, click on "Python Debugger: Debug Python File".

After everything loads, you will find your first breakpoint highlighted in yellow - that shows where your code is currently at.

### Using Debugger

Now that your debugger is runnning, how do you use it?

Somewhere near the top of the screen, a bar with seven icons will appear.

The first icon looks like 6 dots in a rectangle. It lets you move the debugging bar.

The second icon lets you run the program quickly, until the code reaches the next breakpoint. It is called "Continue" and can be triggered with F5.

The third icon lets you run just the next line of code. It is called "Step Over" and can be triggered with F10.

The fourth icon and fifth icon will be covered later- you don't need them right now.

The sixth icon restarts your debugging from the beginning. It is called "Restart" and can be triggered by *Ctrl + Shift + F5*.

The last icon stops running your code, in case you don't want to look at the rest of the program. It is called "Stop" and can be triggered by *Shift + F5*.

# Comments

Sometimes you may want to leave a note by some piece of code; maybe to explain what it does if it is particularly difficult to read. This is especially useful if you are sharing your code with other people.

There are two ways to make comments in Python - a one-line comment, or a multiple-line comment.

### One-line Comments

A one-line comment just needs a hashtag, like this:
```
# print("Hello World!")
```
When you run the program, this line will not do anything.

Here is an example of a comment as explanation:
```
# outputs "Hello World!".
print("Hello World!")
```

If you neglect to use the hashtag in the first line, Python will try to execute your words. When it cannot, your program will break. Try it!

### Multiple-line Comments

Sometimes you want more than just one line of comments. Then, surround whatever text you want commented out with triple quote marks. Here is an example:

```
''' This
is a

comment!
'''
```

Once again, nothing will happen if you run this. However, if you remove the triple quote marks, the program will crash.

A typical way to use this is as a header for a program - stating what it does, who wrote it, and when.

It is also often used with functions, but we'll get to that later.

# Importing

Sometimes, basic Python just doesn't have what you need. (For example, a square root function!) Luckily, others have written programs - called "modules" - that have the needed functions! To include this code, just type
```
import 
```
at the top of the file, then the name of your module. For example, the module math has a square root function; so let's import it!
```
import math
```
That's it! Well, not really. To call the square root function, you need to use
```
math.sqrt()
```
Just remember to include that and you should be fine.

# Conclusion

Now you're all set to begin writing code! Good luck!
