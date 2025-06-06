# Two Pointers

Two pointers is a method used in competitive coding that enables a quicker version of traversing an array of numbers.

A common questions where two pointers applies is as following:
In a sorted array of 10 numbers, find any pair that sum up to 10.

The obvious way to do this problem is to loop through the array twice, and then compare each possible pairing. However, in a worst case scenario, this method will need to run 90 different pairs.

To do this problem with two pointers, we establish a right and left pointer, at the first index and final index respectively.

If the sum of these two numbers are too small, the left pointers moves right by one index. If the sum of these two numbers are too big, then the right pointer moves right by one. In a worst case scenario, this method runs about 30 to 40 pairs before completing.

Example code:

```cpp
#include <iostream>
using namespace std;
int main(){
    int arr[8] = {1, 3, 4, 5, 6, 8, 11, 13};
    int left = 0, right = 7;
    while(left < right){
        if(arr[left] + arr[right] == 10){
            cout << left << " " << right << endl;
        }
        else if(arr[left] + arr[right] > 10){
            right --;
        }
        else{
            left ++;
        }
    }

}

```

However, the left and right pointers do not necessarily need to be established at the beginning and end. In the sliding window method, the left and right pointers simply delineate a subset of the array.

For example, consider the following question:
Find the largest sum possible by a subarray of length 5 in an array of length 15.

Like the previous question, in a worst case scenario, a double loop would be feasible but would run 75 times.

The sliding window involves shifting the right and left pointers as described previously, except the starting positions are slightly different. This method can finish the problem in only 15 iterations.

```cpp
#include <iostream>
using namespace std;
int main(){
    int arr[15] = {4, -1, 7, 8, 10, 3, -7, -9, 2, 4, 0, -5, -1, 2, 6};
    int left = 0, right = 4;
    int maxsum = 0;
    int sum = 28; //sum of first 5 values
    for(int i = 1; i <= 10; i ++){
        sum += arr[right + 1];
        sum -= arr[left];
        left ++;
        right --;
        
    }


}


```
