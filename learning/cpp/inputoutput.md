
# Basic I/O


In more recent USACO problems, input and output can easily be implemented using `cin` and `cout` from the iostream library in the standard namespace (`std::`)

This page will go over `cin` and  `scanf` line input and `freopen` and `ifstream` file opening

::: warning

cin/cout can be quite slow for larger sets, there are some faster methods below although a bit less simple.

**Do not use `endl`.** This will flush the output buffer, causing additional overhead which makes the program run slower.

Use `\n`

:::

  

::: tip

If using cin / cout, include this to improve runtime

``` cpp
ios::sync_with_stdio(false);
cin.tie(nullptr);
```

:::

## Method 1: cin

Let's say we want to take the input for 2 integer variables: x and y

 ``` cpp

#include <iostream>
using namespace std;

int main()
{
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  int x; int y;
  std::cin >> x >> y;
}

 ```
  
## Method 2: scanf & printf
The `scanf` function takes 2 **main** parameters, (there are a few optional ones, but they are not necessary for basic I/O) a format specifier and a list of pointers for the input values.

Let’s say we want to take input for 2 variables; `x` and `y`, their values being `1` and `3` respectively.

``` cpp
#include <bits/stdc++.h>
using namespace std;

int main()
{
    int x,y;
    scanf("%d%d",&x,&y);
    printf("%d%d",x,y);
}

```
In the code, `scanf` has 2 integer format specifiers which point to the variables `x` and `y`. Then, `printf` takes another 2 integer format specifiers and outputs `x` and `y`.

# File I/O
## Method 1: freopen

File opening uses `freopen` from the `<cstdio>` library.

| **Parameter** | **Description**                              |
|---------------|----------------------------------------------|
| **filename**  | File name for the stream (e.g., `.in`)       |
| **mode**      | File access mode: `r` (read), `w` (write), `a` (append) |
| **stream**    | Pointer to redirect the stream (e.g., `stdin`, `stdout`) |

Suppose we have an input file ```nervousing.in``` and we want to output to file ```nervousing.out```.

The text i/o will be the same. However, you will need to figure out how to open a file and write output in a different one. Using ```freopen```, you just need to **change the modes of the output streams.**

``` cpp
#include <bits/std++.h>
using namespace std;

int main() 
{
  freopen("nervousing.in", "r", stdin);
  freopen("nervousing.out", "w", stdout);
  // the same i/o stuff applies here as well now that the i/o streams are redirected
}

```

## Method 2: ifstream / ofstream
Note that after using this, `cin` and `cout` function the same as `fin` and `fout`

ifstream and ofstream are constructors contain 1 required argument, a string literal file name (the other are some optional modes)

``` cpp
#include <bits/stdc++.h>
using namespace std;

int main()
{
 ifstream fin(“nervousing.in”);
 ofstream fout(“nervousing.out”);
}
```
