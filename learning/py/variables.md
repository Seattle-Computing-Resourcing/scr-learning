#  Variables

Variables are one of the most basic things in coding. They allow you to store some information.

## Defenitions

When we put a value into a variable, we **assign** that value to the variable.

When we create a variable with a certain name, we call it **initializing** the variable.

When we read the value stored in a variable, we **access** it.

## Syntax

### Assigning

To assign a value to a variable, we type

``` py
a = 
```

Then the variable ``a`` will hold whatever value is placed after the equal sign.

### Accessing

To access a variable, just type its name.

You will see many examples of this in later lessons.

## Datatypes

Each variable has a specific type of data- they can be numbers of several types, letters, and more! We will now look at each type in more detail.

### Integers

In programming, "Integer" means the same thing as in math- a number with no decimal part. They can be positive or negative.

Some examples of integers are 1, 5, and -7; however, 0.5 is NOT an integer.

In python, integers have no minimum or maximum value and are instead limited only by the memory alloted to python.

Here is an example of making a variable called a that holds the value 4.

``` py
a = 4
```

### Floats

"Floats" are basically umbers with a decimal point.

Some examples are 0.7, 4, and -1.333333.

Here is an example of creating a variable *b* with the value -7.6.

``` py
b = -7.6
```

::: warning

Floats have a limited precision but it is so large it does not usually matter. Just be wary that it's a possibility!

Another error to be wary of is that adding two floatss can be slightly off. Try to type 

``` py
print(0.1 + 0.2)
```

in your file, then run it. This should output the sum of 0.1 and 0.2, but instead is slightly off!

This error usually only matters when you're checking equality. Go to the lesson about if statements to learn more.

:::

### Booleans

You will learn much more about booleans later, but for now, know that they can be `True` or `False`. Be careful, `true` and `false` don't work! You can create a variable called `c` that stores `True` like this:

``` py
c = True
```

### Strings

Strings are basically letters, words, sentences- any sequence of characters. They can store any Unicode character. In python, you show some text is a String by surrounding it in quotes, like this: "Hello World!"

You can create a variable called text storing a String like this:

``` py
text = "Hello World! 😀"
```

As you can see, the String stores an emoji as well as text.

Strings can also hold numbers, for example:

``` py
myNum = "42"
```

::: warning

While this may look like a number, you cannot do everything you usually would with it. For example, you can't add it to other numbers!

To learn what to do, see type conversions below.

:::

Strings can also be empty:

``` py
myString = ""
```

#### Escape Characters

Strings can also have escape characters. These allow you to include things you usually wouldn't be able to in your String. They usually take the form of a backslash ( \\ ) followed by another character. For example, type:

``` py
text = "Line 1 \n Line 2"
```

This outputs:

```
Line 1
Line 2
```

because \\n is a newline character, which creates a new line!

You can also use \\t for a tab, \\' and \\" for a single and double quote respectively, and \\\\ for a backslash (which would usually create an unwanted escape character.)

## How to Convert

Quite often you may need to convert between types. In python, this can easily be done. Here are the details!

### Converting to Integers

To convert to an Integer, just call

``` py
int()
```

with whatever you want to convert in the parenthesis.

Converting a float to an int (short for Integer) truncates it, removing the decimal part- basically floors it.

Converting a String to an int is also possible; Python will just use any numbers in the String. for example, 

``` py
int("12")
```

is the *integer* 12! However, 

``` py
int("a12")
```

will throw an error as "a12" is not a number.

Booleans can also be converted to ints; True becomes 1, False becomes 0.

### Converting to Floats

Convert to floats using:

``` py
float()
```

An integer such as 4 will become 4.0.

A Boolean will become 0.0 or 1.0 if it is False or True respectively.

A String such as "12.5" will become 12.5.

### Converting to Booleans

Convert to booleans using

``` py
bool()
```

Any int or float that isn't equal to 0 will become True; 0 or 0.0 will become False.

Any nonempty String will become True, an empty String will become False.

### Converting to Strings

Convert to a String using

``` py
str()
```

Converting a datatype to a string returns however we would write whatever we're converting.

For example, `str(12)` is `12`, `str(12.5)` is `12.5`, `str(True)` is `True`

## Naming Variables

In python, variable names can have uppercase and lowercase letters, numbers (as long as they aren't in the first spot), and underscores. 

Variables are case-sensitive, so var and Var are not the same variable and can store different values!

Some words are reserved keywords, which cannot be used as variable names because they are used as code. Some examples are "if" and "True". 

::: details List of Reserved Keywords

False	

def	

if	

raise

None	

del	

import	

return

True	

elif	

in	

try

and	

else	

is	

while

as	

except	

lambda	

with

assert	

finally	

nonlocal	

yield

break	

for	

not

class	

form	

or

continue	

global	

pass

:::

Here are many examples of correct variables with correctly assigned values:

``` py
a = 1
A = -3
myVar = "Hello!"
my_Var = "Not Hello!"
myVar_2 = True
_myVar = 2.5
```

And here are some variable names that wouldn't work, for various reasons:

``` py
2num
if
a-b
:)
```

## Summary

Now you've learned how to name, initialize, and assign variables.
You've also learned about the primitive datatypes and how to convert between them.
With just a few more lessons, you can begin writing some real code!
