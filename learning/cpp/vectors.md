# Vector

This article provides a brief introduction to vectors, one of the most important data structures in programming.
## Overview

A **vector** is similar to an [array](https://learningseattlecr.vercel.app/learning/cpp/arrays) that can change its size. It is also known as a resizable or dynamic array due to its resizable nature.

Similar to an array, vectors are zero-indexed, and access to elements is the exact same as array access.

You must include the vector library by using 
```cpp 
#include <vector>
```

However, it is also included in `<bits/stdc++.h>`, which includes many other libraries as well.

## Creation
Vector creation is simple, but comes in many forms. In the most basic form, we use
```cpp
vector<t> v;
```
where `t` is the type of the element (int, bool, string, ...) and `v` is the name of the vector.

There are many more ways to initialize a vector apart from the one seen above.
```cpp
vector<int> nums = {1, 2, 3, 4, 5};
vector<int> allOne(5, 1); //5 is the amount of elements, 1 is what the values are set to
vector<int> allZero(5); //5 is amount of elements, all the elements are set to 0
int arr[] = {1, 2, 3, 4, 5};
vector<int> copyArr = {arr, arr + (sizeof(arr) / sizeof(arr[0]))};
vector<int> copyVector = {nums.begin(), nums.end()};
```

## Insertion

## Access
As stated above, accessing a vector is similar to accessing an array. The vector is an ordered collection of variables, meaning that each element `e` has an index assigned to it, and these indices are increasing (ordered) in the range $[0,n)$ where $n$ is the size of the vector.

Imagine the vector to look something like a big rectangle:
```
 ___ ___ ___ ___ ___ ___ ___
|___|___|___|___|___|___|___|
  0   1   2   3   4   5   6
```

The numbers below the rectangle are the indices of the vector.

Knowing the index of an element we can access it with the same syntax as accessing an array.

Imagine we have a vector `v` with elements `{1, 2, 3, 4, 5}`. Accessing `v[0]` and `v[1]` returns `1` and `2`.
```cpp
cout << v[0]; // 1
cout << v[1]; // 2
```

___________________________

Setting an element of the vector to a specific value is the same as it is for an array. We access the element at position $i$ and modify it. Using the previous example with vector `v`, we modify the element at the $0$th position to be $0$.
```cpp
v[0] = 0;

cout << v[0]; // 0
cout << v[1]; // 2
```


Each of the types listed above are valid, but the first three are most common. 
Vectors have a variety of other methods, a few significant ones are listed below:

| Method                                        | Function                                                                                                                                         |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| $\text{push\_back(type e)}$                   | Adds an element `e` of type `type` to the end of the vector. `type` must be the datatype that the vector contains.                              |
| $\text{pop\_back()}$                          | Removes the last element in the vector.                                                                                                          |
| $\text{size()}$                               | Returns an `int`, giving the amount of elements in the vector.                                                                                   |
| $\text{empty()}$                              | Returns a `bool`, saying if the vector is empty or not.                                                                                          |
| $\text{erase(iterator first, iterator last)}$ | Removes all elements in the range $[\text{first}, \text{last})$. If the second parameter is not given, it removes the element at $\text{first}$ |
| $\text{clear()}$                              | Removes all elements of the vector.                                                                                                              |
| $\text{back()}$                               | Returns the last element in the vector.                                                                                                          |
| $\text{begin()}$                              | Returns the iterator to the first element of the vector.                                                                                         |
| $\text{end()}$                                | Returns the iterator to the last element of the vector.                                                                                          |
| $\text{insert(iterator pos, type e)}$         | Inserts an element `e` of type `type` to the given position. `type` must be the datatype that the vector contains.                               |
| $\text{rbegin()}$                             | Returns an iterator that points to the last element.                                                                               |
| $\text{rend()}$                               | Returns an iterator that points to an imaginary element before the first.     |

## Iterator
As seen in the chart above, a few methods return or accept an **iterator**. The iterator points to an element in some sort of data structure: in this case it points to an element of a vector. 

The type of the iterator for a data structure of container type `t` is `t::iterator`. A `vector<string>` has a iterator of type `vector<string>::iterator`. In practice, `auto` is used instead of typing the entire name. 

To fetch the value the iterator points to, we use the `*` operator.
```cpp
vector<int> nums = {1, 2, 3, 4, 5};
auto first = nums.begin();
cout << *first; // 1
```
With an iterator, it is possible to traverse through a vector:
```cpp
for (auto it = nums.begin(); it != nums.end(); it++) {
	cout << *it << "\n";
}
```
The `rbegin()` and `rend()` functions in C++ allow us to traverse a for loop backwards.
```
for (auto it = nums.rbegin(); it != nums.rend(); it++) {
	cout << *it << "\n";
}
```

However, it is also possible to just access elements at an index:
```cpp
for (int i = 0; i < nums.size(); i++) {
	cout << nums[i] << "\n";
}
```
Even easier, you can use an enhanced for loop (also known as the for-each loop):
```cpp
for (auto e : nums) {
	cout << e << "\n";
}
```