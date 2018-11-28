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
    // 无精简
    // if(i === lefts.length) {
    //   arr[k] = rights[j++]
    // } else if(j === rights.length) {
    //   arr[k] = lefts[i++]
    // } else {
    //   arr[k] = lefts[i] <= rights[j] ? lefts[i++] : rights[j++]
    // }

    // 精简1
    // if(j === rights.length) {
    //   arr[k] = lefts[i++]
    // } else {
    //   // undefined < 或 > 任意值都是false
    //   // 如果 i === lefts.length
    //   // 即lefts[i] = undefined，那么会走else
    //   arr[k] = lefts[i] <= rights[j] ? lefts[i++] : rights[j++]
    // }

    // 精简2
    // if(j === rights.length || lefts[i] <= rights[j]) {
    //   arr[k] = lefts[i++]
    // } else {
    //   arr[k] = rights[j++]
    // }
    arr[k] = j === rights.length || lefts[i] <= rights[j] ? lefts[i++] : rights[j++]
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

let arr = [38,27,43,3,9,10,5555,33,11,1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]
mergeSort(arr, 0, arr.length-1)
console.log(arr)