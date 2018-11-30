/** 
 * @Author: zhuxiankang 
 * @Date:   2018-11-30 08:46:20  
 * @Desc:   归并排序习题5 
 * @Parm:   插入排序的最坏情况的运行时间分析是，其中寻找插入位置采用while循环反向线性查找已排好序的数组array[1...j-1]，
 *          如果要对改算法进行优化，我们可以采用问题4的二分查找来优化这个线性查找的过程，写出javascript代码的实现。
 */

 function binSearch(arr, end, v) {

   let  start = 0,
        middle

   while(start <= end) {
      middle = Math.floor((start + end)/2)

      // 如果当前要插入的值正好排序子数组中已存在，则将该值插入匹配值前面
      // if(arr[middle] === v) {
      //   return middle - 1
      // } else if(arr[middle] > v && arr[middle - 1] >= v) {
      //   end = middle - 1
      // } else if(arr[middle] < v && arr[middle + 1] <= v) {
      //   start = middle + 1
      // } else if(arr[middle] > v && arr[middle - 1] < v) {
      //   return middle - 1
      // }

      // 如果当前要插入的值正好排序子数组中已存在，则将该值插入匹配值前面
      if(arr[middle] === v ) {
        return middle
      }

      // 否则判断该值需要落入的区间
      if(arr[middle] > v) {

        if(arr[middle - 1] === v) {
          return middle - 1
        } else if(arr[middle - 1] < v) {
          return middle 
        } else {
          end = middle - 1
        }

      } else {

        if(arr[middle + 1] === v) {
          return middle 
        } else if(arr[middle + 1] > v) {
          return middle
        } else {
          start = middle + 1
        }
      }
    }

   return -1
 }



 function insertionSort(arr) {
    let array = [...arr],
        key,
        j

    // 默认数组元素0排好序
    for(let i=1; i<array.length; i++) {

      key = array[i]
      j = i - 1

      // while(j>=0 && key < array[j]) {
      //   array[j + 1] = array[j--]
      // }
      // array[j+1] = key

      // 二分查找
      binSearch(array, j, key)
    }

    return array
 }

 let arr = [1,3,4,5,55,22,88,22,99,1]
 console.log(insertionSort(arr))