# Maps and Sets
## Maps
Often known as dictionaries in other coding languages, maps associate a group of keys with their corresponding
values. Maps are included in their own library as well, so if you are not using 
`#include <bits/stdc++.h>`,  you will need to include the map library.
```cpp
map<int, str> mymap;
mymap[1] = "Seattle";
mymap[2] = "Coding";
mymap[3] = "Resourcing";

//Mymap currently looks like:
{{1,"Seattle"}, {2, "Coding"}, {3, "Resourcing}}
```

In the declaration of a map, the first datatype is the key datatype, and the second datatype is the value datatype.
Maps can be thought of as a group of pairs where the values (second term) can be accessed by calling the key (first term).

To iterate through a map, we simply do the following:
```cpp
#include <bits/stdc++.h>
using namespace std;
int main(){
    map<int, string> myMap = {{1,"Seattle"}, {2, "Coding"}, {3, "Resourcing"}};
    for(auto p: myMap) {
        cout << p.first << " " << p.second << "\n";
    }
}

//Output
1 Seattle
2 Coding
3 Resourcing
```

The brackets of a map contain the key, which will return a value, similar to vectors and arrays. If I tried `myMap[1]`, I would get the value `"Seattle"`.
The key could be any datatype. For example, `myMap` could have key type `string`.
```cpp
map<string, int> myMap = {{"Seattle", 1}, {"Computing", 2}, {"Resourcing", 3}};
cout << myMap["Seattle"]; // displays "1"
```

## Sets
Sets are similar to vectors, with the key difference of being automatically sorted in a specific way.
In the default set, they will be sorted in ascending order and also automatically deduplicates the set of numbers.
If not using `#include <bits/stdc++.h>`, the line `include <set>` will need to be used.

```
#include <iostream>
#include <set>
using namespace std;
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
using namespace std;
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
using namespace std;
int main(){
    set<int> s = {1,2,3,4,5};
    auto it1 = s.begin();
    auto it2 = next(it1, 2);
    cout << *it1 << " " << *it2;
}
//Output
1 3 

```
In this code, auto is used to instantiate an iterator, and the * in front of the iterator gives it the actual value the iterator points to.

Another way to iterate through the set is as follows:
```cpp
#include <iostream>
#include <set>
using namespace std;
int main(){
    set<int> s = {1, 2, 3, 4, 5};
    for(auto it = s.begin(); it != s.end(); it ++){
        cout << *it << endl;
    }
}
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
        cout << *it << endl;
    }
}

//Output
3
4
5
```
