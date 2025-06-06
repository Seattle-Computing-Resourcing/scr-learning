# Arithmetic Operations

The four basic arithmetic operations are the exact same as normal, and PEMDAS order of operations is automatically followed.

```cpp
#include <iostream>
using namespace std;
int main(){
    int a = 1 + 2*5 - 6/3;
    cout << a << endl;
}

//Output: 9
```

However, when using the division symbol, the result is always an int unless the values themselves have are floats or doubles.

For example, 7/2 will resolve into 3, whilst 7.0/2 resolves to 3.5.

To use the modulo operator, the percent symbol is used.

```cpp
#include <iostream>
using namespace std;
int main(){
    int a = 7 % 3;
    cout << a << endl;
}

//Output: 1
```

To directly increment or decrement an int, the following operations are used.

```cpp
#include <iostream>
using namespace std;
int main(){
    int a = 1;
    int b = 1;
    a ++;
    b --;
    cout << a << " " << b << endl;
}

//Output: 2 0
```

The previous method of incrementation/decrementation is known as a post-increment, since the value is incremented after being processed.
For example, the following code uses a post-increment:
```cpp
#include <iostream>
using namespace std;
int main(){
    int a = 1;
    int b = a++;
    cout << a << " " << b << endl;
}

//Output: 2 1
```

In order to increment/decrement before processing, a pre-increment is used.

```cpp
#include <iostream>
using namespace std;
int main(){
    int a = 1;
    int b = ++a;
    cout << a << " " << b << endl;
}

//Output: 2 2
```
