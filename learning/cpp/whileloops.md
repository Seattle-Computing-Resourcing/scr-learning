## while Loops
While loops will keep looping through a block of code, as long as a condition is met. The skeleton for a while loops is as following:
```cpp
while(condition){
    //execute code
}
```

An example of a while loop is as following:
```cpp
int i = 0;
while(i<10){
    cout << "Hello World!";
    i++;
}
```
Notice that this does the same thing as a for loop, and the two types are often interchangeable. Usually, for loops are easier to execute, but in some scenarios only while loops will work, for exampe when the amount of times to loop is unknown.

Often, while loops are implemented for breadth first search, and many niche calculations. For example, you can loop through all of the permutations of an array using a for loop.
```cpp
int array[5] = {1, 2, 3, 4, 5};
while(next_permuation(array)){
    //execute code
}
```
If you want to early exit a for loop or a while loop, there are two main ways to skip parts of the code in the main block. The keyword break creates an early exit and skips the rest of the loop, and the keyword continue skips the rest of the iteration and moves to the next iteration.
```cpp
//break
int i = 0;
while(i < 10){
    
    if(i == 5){
        break;
    }
    cout << i << endl;
}

//continue
int i = 0; 
while(i < 10){
    if(i == 5){
        continue;
    }
    cout << i << endl;
}


// output for break
0
1
2
3
4

// output for continue
0
1
2
3
4
6
7
8
9
```

The structure of a while loop can be changed by using a do-while loop. In a do-while loop, instead of checking the boolean expression prior to the code block, it checks it after. For example, the two following pieces of code do not print the same thing.

```cpp
int i = 0;
while(i < 5){
    i ++;
    cout << i << endl;
}

int j = 0;
do{
    j ++:
    cout << j << endl;
}while(j < 5);

//Output 1
1
2
3
4
5

//Output 2
1
2
3
4
5
6

```
