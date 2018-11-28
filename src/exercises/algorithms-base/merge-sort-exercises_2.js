/** 
 * @Author: zhuxiankang 
 * @Date:   2018-11-28 19:49:53  
 * @Desc:   归并排序习题3 
 * @Parm:   把插入排序表示为一个递归过程，为了排序A[1...n]，我们递归地排序A[1...n-1]，然后把A[n]插入到已排序的数组A[1...n-1]。
 *          写出这个递归程序的javascript实现，并为这个插入排序的递归版本给出一个最坏情况运行时间的递归式。 
 */

function insertion(arr, length) {
  let key = arr[length],
      j = length - 1

  while(j>=0 && key<arr[j]) {
    arr[j + 1] = arr[j--]
  }

  arr[j + 1] = key
} 

function insertionSort(arr, length) {
  if(length <=0 ) return
  insertionSort(arr, length - 1)
  insertion(arr, length)
}

let arr = [55,3,5,7,2,4,6,8,12122,45,67]
insertionSort(arr, arr.length-1)
console.log(arr)