---
outline: 3
lastUpdated: false
---
# Print
### Question Statement
Write a complete program that takes an input string `s` and subsequently prints `s`.

#### Input Format 
The input arrives from the terminal.

A string `s` is given. 

#### Output Format 
The result is printed to the terminal.

The same string `s` that was given through the input is printed.

#### Sample Input
```
ABC123
```

#### Sample Output
```
ABC123
```

#### Preconditions
The string is guaranteed to be one line.

### Solution
Note that there may be many more solutions.

::: details Solution
The solutions basic idea is to declare a String named `s`. Use a scanner to get this String, and then print `s`. The code is shown below.
```java
import java.util.Scanner;

public class Main {
    public static void main (String[] args) {
        Scanner scnr = new Scanner(system.in);

        String s = scnr.nextLine();

        System.out.println(s);
    }
}
```
:::