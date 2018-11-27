/** 
 * @Author: zhuxiankang 
 * @Date:   2018-11-27 20:49:11  
 * @Desc:   归并排序习题1 
 *          重写归并排序，使之不使用哨兵值，而是一旦数组A或B的所有元素均被复制回原数组就立刻停止，
 *          把另一个数组的剩余元素复制回原数组。
 */

 function merge(arr, leftStart, leftEnd, rightEnd) {
  let leftNum = leftEnd - leftStart + 1,
      rightNum = rightEnd - leftEnd,
      lefts = [],
      rights = [],
      i,j

  for(i=0; i<leftNum; i++) {
    lefts[i] = arr[leftStart+i]
  }

  for(j=0; j<rightNum; j++) {
    rights[j] = arr[leftEnd+1+j]
  }

  i = 0
  j = 0

  for(let k = leftStart; k<=rightEnd; k++) {

    if(i === lefts.length - 1) {
      arr[k] = rights[j]
      j++
    } else if(j === rights.length - 1) {
      arr[k] = lefts[i]
      i++
    } else {
      if(lefts[i] < rights[j]) {
        arr[k] = lefts[i]
        i++ 
      } else {
        arr[k] = rights[j]
        j++ 
      }
    }
  }
 }


 function mergeSort(arr, start, end) {
  if(start < end) {
    let division = Math.floor((start + end)/2)
    mergeSort(arr, start, division)
    mergeSort(arr, division + 1, end)
    merge(arr, start, division, end)
  }
 }

let arr = [38,27,43,3,9,82,10]
mergeSort(arr, 0, arr.length-1)