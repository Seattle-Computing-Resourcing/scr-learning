---
outline: deep
---
# Datatypes
In coding, data can be stored as primitives, which include strings, ints, etc. Here are a few commonly used datatypes and there usages.
## Ints
Ints are stored as bits, and is essentially a number. However, this number must be an integer, and if it is a decimal, the decimal will be truncated off.

For example, we can store the following datatypes as integers:
```cpp
#include <bits/stdc++.h>
using namespace std;
int main(){
    int x = 15;
    return 0;
}
```
The **int** before the variable name signifies the data type of the variable, and in this case means that x contains an integer.

However, normal integers will only be stored up to 2147483647 and -2147483647, or $2^31 - 1$ and $-2^31+1$,  and any number larger than that will need to be stored as a long integer.

To implement a long integer, the code is simply:
```cpp
#include <bits/stdc++.h>
using namespace std;
int main(){
    long int = 12345678910;
    return 0;
}
```
To go even farther, the long long integer can be used, which extends the boundaries up to $2^64 - 1$ and $-2^64 + 1$.

## Chars and Strings
### Chars
A char is essentially just a letter. In C++, chars are stored as ASCII values, a system that assigns 127 different characters to a number, and the number is then stored into the char. However, when a char is accessed, it will automatically convert into the character form.

This makes it possible to do math with characters in terms of their ASCII number. For example, because all lower case letters are consecutive, and all upper case letters are consecutive, we can write the following:
```cpp
#include <bits/stdc++.h>
using namespace std;
int main(){
    int x = 'c' - 'a' + 1;
    return 0;
}
```
This application is useful, because this value of x is equal to the distance between a and c in the alphabet.

In C++, chars are denoted with single apostrophes, ' '. For example, to store the character 'a':
```cpp
#include <bits/stdc++.h>
using namespace std;
int main(){
    char x = 'a';
    return 0;
}
```
In this code, the word **char** signifies that the variable x contains a character.

### Strings
Strings are a combination of chars and have a lot of functions related to them. First, strings are storedy with double parentheses. For example, if I wanted to store the string Hello World!, the code would be the following:
```cpp
#include <bits/stdc++.h>
using namespace std;
int main(){
    string a = "Hello World!";
    return 0;
}

```

The word **string** before the variable signifies that the variable x contains a string.

### Functions Related to Strings
In C++, there are several very important functions related to strings. The most important function is the .length() function, which returns the length of a string.
```cpp
#include <bits/stdc++.h>
using namespace std;
int main(){
    string a = "Hello World!";
    int x = a.length();
    cout << x;
    return 0;
}
```
In this case, the value 12 would be outputted, because there are 12 chars in the string "Hello World!", *including the space*.

There also exists a function to identify the char at a specific place. To do so:
```cpp
#include <bits/stdc++.h>
using namespace std;
int main(){
    string a = "Hello World!";
    cout << a[4];
    return 0;
}

```
This code outputs the fifth letter of the string "Hello World!", which will be 'o'. It is not 'l' because in C++, strings are 0 indexed, meaning the first letter, 'H', would be at index 0.

There is also a function to create a substring of a string. To do so:
```cpp
#include <bits/stdc++.h>
using namespace std;
int main(){
    string a = "Hello World!";
    string b = a.substr(6, 6);
    cout << b;
    return 0;
}

```
This code outputs the string "World!". The syntax of a substring function places the starting index first, and the length of the string following the comma. In this case, the substring b starts at index 6 of string a, and has a length of 6.

It is also possible to combine multiple strings into one, which is called concatenation. For example, the strings can be combined in the following way:
```cpp
#include <bits/stdc++.h>
using namespace std;
int main(){
    string first = "Hello";
    string second = "World!"
    string combined = first + " " + second;
    cout << combined;
    return 0;
}
```
This code outputs the string "Hello World!", because the two strings were *concatenated* together with a space in the middle.