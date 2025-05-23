# Maps and Sets
## Maps
Often known as dictionaries in other coding languages, maps associate a group of keys with their corresponding
values. Maps are included in their own library as well, so if you are not using 
**#include <bits/stdc++.h>**,  you will need to include the map library.
```cpp
#include <map>
using namespace std;
int main(){
    map<int, str> mymap;
    mymap[1] = "Seattle";
    mymap[2] = "Coding";
    mymap[3] = "Resourcing";

}

//Mymap currently looks like:
{{1,"Seattle"}, {2, "Coding"}, {3, "Resourcing}}
```

In the declaration of a map, the first datatype is the key datatype, and the second datatype is the value datatype.
Maps can be thought of as a group of pairs where the values can be called by the other value in the pair.

To iterate through a map, we simply do the following:
```cpp
#include <map>
using namespace std;
int main(){
    map<int, str> mymap = {{1,"Seattle"}, {2, "Coding"}, {3, "Resourcing}}
    for(auto p: mymap){
        cout << p.first << " " << p.second << endl;
    }
}

//Output
1 Seattle
2 Coding
3 Resourcing
```

There also exist unordered maps, which have their own library. Unordered maps are essentially identical to maps, except are stored by hashing, which leaves the maps in no particular sorted order. However, unordered maps have much faster insertion, deletion, and searching.

```cpp
#include <iostream>
#include <unordered_map>
using namespace std;
int main(){
    unordered_map<int, string> um;
    um[1] = "Seattle";
    um[2] = "Computing";
    um[3] = "Resourcing";
    for(auto it : um){
        cout << it.first << " " << it.second << endl;
    }
}

/*
Result:
3 Resourcing
1 Seattle
2 Computing

*/

```

## Sets
Sets are similar to vectors, with the key difference of being automatically sorted in a specific way.
In the default set, they will be sorted in ascending order and also automatically deduplicates the set of numbers.
If not using **#include <bits/stdc++.h>**, the line **include < set>** will need to be used.


```
#include <iostream>
#include <set>
int main(){
    set<int> s = {1, 4, 2, 4};   
    for(auto x: s){
        cout << x << " ";
    }
    return 0;
}

//Output
1 2 4
```
In order to add elements into the set, the insert of emplace functions can be used. Time complexity will be O(log n).

```cpp
#inclue <iostream>
#include <set>
int main(){
    set<int> s = {1,4,2,4};
    set.insert(3);
    set.insert(4); //This line will not add anything
    set.emplace(3); //This line will also not add anything
    set.emplace(5);
    for(auto x: s){
        cout << x << " ";
    }
    return 0;
}

//Output
1 2 3 4 5

```
In sets, data is saved as an iterator, so they can't be called by index. Instead, they are accessed by moving an iterator through the set.
```cpp
#include <iostream>
#include <set>
int main(){
    set<int> s = {1,2,3,4,5};
    auto it1 = s.begin();
    auto it2 = next(it1, 2)
    cout << *it1 << " " << *it2;
}
//Output
1 3 

```
In this code, auto is used to instantiate an iterator, and the * in front of the iterator gives it the actual value of the iterator.

Another way to iterate through the set is as follows:
```cpp
#include <iostream>
#include <set>
int main(){
    set<int> s = {1, 2, 3, 4, 5};
    for(auto it = s.begin(); it != s.end(); it ++){
        cout << *it << endl
    }
}
//Output
1
2
3
4
5

```
In order to remove elements, the erase() function is used. They can remove either a value or an iterator. Time complexity will be O(log n).
```cpp
#include <iostream>
#include <set>
using namespace std;

int main(){
    set<int> s = {1, 2, 3, 4, 5};
    s.erase(2); //Erases the value 2
    s.erase(it.begin()); //Erases the iterator at the zeroth index
    for(auto it = s.begin(); it != s.end(); it ++){
        cout << *it << endl
    }
}

//Output
3
4
5
```
Sets also have a find function, which returns an iterator pointing to the value if it is found, and to the end of the set if it is not found. For example:

```cpp
#include <iostream>
#include <set>
using namespace std;
int main(){
    set<int> s = {1, 2, 3, 4, 5};
    auto it1 = s.find(3);
    auto it2 = s.find(6);
    if(it1 != s.end()){
        cout << "3 is found." << endl;
    }
    else{
        cout << "3 is not found." << endl;
    }
    if(it2 != s.end()){
        cout << "6 is found." << endl;
    }
    else{
        cout << "6 is not found." << endl;
    }
}

/*
Result:

3 is found.
6 is not found.

*/

```

Similarly to maps, there are also unordered sets. Unordered sets are faster to insert, delete, and traverse, but are in no particular sorted order.

```cpp
#include <iostream>
#include <unordered_set>
using namespace std;
int main(){
    unordered_set <int> us = {1,2,3,4,5};
    for(auto it : us){
        cout << *it << " ";
    }
}

/*
Result:
5 4 3 2 1

*/


```
