# for Loops
For loops are one of the most important aspects of programming.

## Overview
The structure for for loops is as following:
```cpp
for(initialization; condition; change){
    // code goes here
}
```

During initialization, a variable is set up to a certain number that controls the starting point of the loop. In competitive coding, the most common initialization line is `int i = 0`. This signifies that at the start of the loop, a variable i is created at a value of 0.

During the condition, a condition is written that will have to be met in order for the code block to be executed. For example, this could be `i < 10`. As long as the variable i is less than 10, the code block will be continued to be executed.

During the change, the variable is altered each loop, and will be altered every time the code block is ran. For example, it could be `i ++`. This code simply adds 1 to i every loop.

If we combine all of this code, we create a functioning for loop, albeit without any body code yet.
```cpp
for(int i = 0; i < 10; i ++){
    cout << "Hello World!" << endl;
}
```

The output would look like:
```
Hello World! 
Hello World! 
Hello World!
Hello World!
Hello World! 
Hello World! 
Hello World!
Hello World!
Hello World!
Hello World!
```

In this code, i is initialized at 0, and at each loop, it is incremented by 1 until it reaches 10, where it breaks it out of the loop.

Additionally, the variable i can also be used, albeit only inside of the for loop. For example, we can use this method to print all of the numbers from 1 to 10.
```cpp
for(int i = 1; i <= 10; i ++){
    cout << i << endl;
}
```

The output for the code above will display numbers 1 to 10:
```
1
2
3
4
5
6
7
8
9
10
```

Additionally, for loops can be nested. For example,
```cpp
for(int i = 0; i < 3; i ++){
    for(int j = 0;j < 3; j ++){
        cout << i << " " << j << endl;
    }
}
```

Printing `i` and `j` would result in the following:
```
0 0
0 1
0 2
1 0
1 1
1 2
2 0
2 1
2 2
```

## Nested Loops
Nested loops can be useful for traversing 2-d arrays, or matrices. The only thing to keep in mind is that the iterating variable can not be called the same thing throughout the for loops.

The header inside the for loops can also be simplified when traversing arrays in order to directly access the array. Both of the following pieces of code print out the values of the array.

```cpp
int array[5] = {1, 2, 3, 4, 5};
for(int i = 0; i < 5; i ++){
    cout << arr[i];
}

for(int i : array){
    cout << i;
}

```

## Changing i
The increment can also be changed inside of a for loop. This can allow changing the iterator variable my a multiple, or by reverse.

For example:

::: code-group

```cpp [Reverse]
for(int i = 10; i > 0; i --){
    cout << i << endl;
}
```

``` [Output 1]
10
9
8
7
6
5
4
3
2
1
```

``` cpp [Multiple]
for(int i = 0; i < 10; i += 2){
    cout << i << endl;
}
```

``` [Output 2]
0
2
4
6
8
```

:::

## Break and Continue
Both for loops and while loops can be ended early with the break keyword. For example, the following code stops the for loops before it is finished.

```cpp
for(int i = 0; i < 10; i ++){
    cout << i << endl;
    if(i == 7){
        break;
    }
}
```

Our output would look like this:
```
0
1
2
3
4
5
6
7
```
Notice how `i` only goes up to 7 before it **breaks** out of the loop.

The **continue** keyword skips the rest of the for loops and moves to the next iteration. For example,

``` cpp
for(int i = 0; i < 10; i ++){
    if(i == 7){
        continue;
    }
    cout << i << endl;
}
```

Noticed how `i==7` is skipped in the iteration.
```
0
1
2
3
4
5
6
8
9
```
