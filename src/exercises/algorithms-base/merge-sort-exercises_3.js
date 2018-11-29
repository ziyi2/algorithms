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


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-11-29 08:53:40  
 * @Desc:   递归1
 * @Parm:    
 */
function binRecursionSearch1(arr, v, start, end) {
  let middle = Math.floor((start + end)/2)

  if(end === 0 || start === arr.length - 1) {
    return -1
  }

  if(arr[middle] === v) {
    return middle
  } else if(arr[middle] > v) {
    return binRecursionSearch(arr, v, start, middle)
  } else {
    return binRecursionSearch(arr, v, middle, end)
  }
}


let arr = [1,2,3,4,5,6,7,8,9,10]
console.log(binRecursionSearch(arr, 11, 0, arr.length))

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-11-29 09:14:34  
 * @Desc:   递归二 
 * @Parm:    
 */

function binRecursionSearch1(arr, v, start, end) {
  let middle = Math.floor((start + end)/2)

  if(arr[middle] === v) {
    return middle
  } else if(start >= end) {
    return -1
  } else if(arr[middle] > v) {
    return binRecursionSearch(arr, v, start, middle - 1)
  } else {
    return binRecursionSearch(arr, v, middle + 1, end)
  }
}





/** 
 * @Author: zhuxiankang 
 * @Date:   2018-11-29 08:53:58  
 * @Desc:   迭代 
 * @Parm:    
 */
function binIterationSearch(arr, v) {

  let start = 0,
      end = arr.length -1,
      middle

  while(start <= end) {
    middle = Math.floor((start + end) / 2)
    
    if(arr[middle] === v) {
      return middle
    } else if(arr[middle] > v) {
      end = middle - 1
    } else if(arr[middle] < v) {
      start = middle + 1
    }
  }

  return -1
}


console.log(binIterationSearch(arr, 1))