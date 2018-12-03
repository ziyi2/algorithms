/** 
 * @Author: zhuxiankang 
 * @Date:   2018-11-30 08:46:20  
 * @Desc:   归并排序习题5 
 * @Parm:   插入排序的最坏情况的运行时间分析是，其中寻找插入位置采用while循环反向线性查找已排好序的数组array[1...j-1]，
 *          如果要对改算法进行优化，我们可以采用问题4的二分查找来优化这个线性查找的过程，写出javascript代码的实现。
 */

 function binarySearch(arr, start, end, v) {

   let  mid

   if(arr[end - 1] <= v) {
     return end - 1
   }

   while(start <= end) {
      mid = Math.floor((start + end)/2)

      // 需要查找的不是一个精确的值，而是一个区间了
      if(arr[mid] >= v && arr[mid - 1] < v) {
        return mid
      } else if(arr[mid] > v) {
        return binarySearch(arr, start, mid, v)
      } else {
        return binarySearch(arr, mid, end, v)
      }
    }

   return -1
 }



 function insertionSort(arr) {
    let array = [...arr],
        key,
        j,
        temp


    // 默认数组元素0排好序
    for(let i=1; i<array.length; i++) {

      key = array[i]
      j = i - 1

      // 二分查找
      j = binarySearch(array, 0, j, key)

      temp = array[j]

      // 就算查到需要插入的位置仍然需要将该位置后面的元素后移腾出空间
      // 省略...
    }

    return array
 }

//  let arr = [1,3,4,5,55,22,88,22,99,1]
let arr = [1,2,3,4,5,7,8]
//  console.log(insertionSort(arr))
// console.log(binarySearch(arr, 0, arr.length, 44))