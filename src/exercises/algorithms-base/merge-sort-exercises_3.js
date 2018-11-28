/** 
 * @Author: zhuxiankang 
 * @Date:   2018-11-28 20:37:52  
 * @Desc:   归并排序习题4
 * @Parm:   回顾线性查找问题，
 *          如果序列`A`已经排好序，就可以将该序列的中点与`v`进行比较。
 *          根据比较结果，原序列中有一半就可以不用再做进一步的考虑了。
 *          二分查找算法重复这个过程，每次都将序列剩余部分的规模减半。
 *          为二分查找写出迭代或递归的`javscript`代码。
 */



function binSearch(arr, v, start, end) {
  let middle = Math.floor((start + end)/2)

  if(!arr[middle]) {
    return -1
  }

  if(arr[middle] === v) {
    return middle
  } else if(arr[middle] > v) {
    binSearch(arr, v, start, middle)
  } else {
    binSearch(arr, v, middle, end)
  }

}


let arr = [1,2,3,4,5,6,7,8]
console.log(binSearch(arr, 6, 0, arr.length-1))
