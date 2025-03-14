# Loops
In C++, loops make it possible to simulate or execute a method multiple times in just a few extra lines. In competitive coding, there are two main types of looping, either a while loop or a for loop.

## for Loops
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

#Output
Hello World! //i = 0
Hello World! //i = 1
Hello World! //i = 2
Hello World! //i = 3
Hello World! //i = 4
Hello World! //i = 5
Hello World! //i = 6
Hello World! //i = 7
Hello World! //i = 8
Hello World! //i = 9

```

In this code, i is initialized at 0, and at each loop, it is incremented by 1 until it reaches 10, where it breaks it out of the loop.

However, the same result can be achieved by decrements instead of increments. For example, the following code would receive the same output:
```cpp
for(int i = 10; i > 0; i --){
    cout << "Hello World!" << endl;
}

```

Additionally, the variable i can also be used, albeit only inside of the for loop. For example, we can use this method to print all of the numbers from 1 to 10.
```cpp
for(int i = 1; i <= 10; i ++){
    cout << i << endl;
}


//Output
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
