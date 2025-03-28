A **vector** is similar to an [[Array]] that can change its size. It is also known as a resizable or dynamic array due to its resizable nature.

Similar to an array, vectors are zero-indexed, and access to elements is the exact same as array access.

You must include the vector by using 
```cpp 
#include <vector>
```

However, it is also included in `<bits/stdc++.h>`

Creation and access is like this:
```cpp
vector<int> v;
v.push_back(1);
v.push_back(2);

cout << v[0]; // 1
cout << v[1]; // 2
```

The first line of our code creating the vector can be more generally written as
```
vector<type> name;
```

Setting an element of the vector to a specific value is the same as it is for an array. We access the element at position $i$ and modify it. Using the previous example with vector `v`, we modify the element at the $0$th position to be $0$.
```cpp
v[0] = 0;

cout << v[0]; // 0
cout << v[1]; // 2
```

There are many ways of initializing a vector. Here are some common types:
```cpp
vector<int> nums = {1, 2, 3, 4, 5};
vector<int> allOne(5, 1); //5 is the amount of elements, 1 is what the values are set to
vector<int> allZero(5); //5 is amount of elements, all the elements are set to 0
int arr[] = {1, 2, 3, 4, 5};
vector<int> copyArr = {arr, arr + (sizeof(arr) / sizeof(arr[0]))};
vector<int> copyVector = {nums.begin(), nums.end()};
```
Each of the types listed above are valid, but the first three are most common. 
Vectors have a variety of other methods, a few significant ones are listed below:

| Method                                        | Function                                                                                                                                         |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| $\text{push\_back(type e)}$                   | Adds an element `e` of type `type` to the end of the vector. `type` must end the datatype that the vector contains.                              |
| $\text{pop\_back()}$                          | Removes the last element in the vector.                                                                                                          |
| $\text{size()}$                               | Returns an `int`, giving the amount of elements in the vector.                                                                                   |
| $\text{empty()}$                              | Returns a `bool`, saying if the vector is empty or not.                                                                                          |
| $\text{erase(iterator first, iterator last)}$ | Removes all elements in the range $[\text{first}, \text{last})$. If the second parameter is left blank, it removes the element at $\text{first}$ |
| $\text{clear()}$                              | Removes all elements of the vector.                                                                                                              |
| $\text{back()}$                               | Returns the last element in the vector.                                                                                                          |
| $\text{begin()}$                              | Returns the iterator to the first element of the vector.                                                                                         |
| $\text{end()}$                                | Returns the iterator to the last element of the vector.                                                                                          |
| $\text{insert(iterator pos, type e)}$         | Inserts an element `e` of type `type` where `type` is the datatype that the vector contains to the given position.                               |
| $\text{rbegin()}$                             | Points to the last element. Adding 1 points to the element before.                                                                               |
| $\text{rend()}$                               | Points to the imaginary element before the first. Adding 1 points to the element before.                                                         |
## Iterator
As seen in the chart above, a few methods return or accept an **iterator**. The iterator points to an element in some sort of data structure: in this case it points to an element of a vector. 

The type of the iterator for a data structure of type `t` is `t::iterator`. A `vector<string>` has a iterator of type `vector<string>::iterator`. In practice, `auto` is used instead of typing the entire name. 

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