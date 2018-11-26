/** 
 * @Author: zhuxiankang 
 * @Date:   2018-11-19 09:15:16  
 * @Desc:   递归归并排序(这里是对arr[left]~arr[rightEnd]进行排序)
 * @Parm:   {Array} arr 待排序的总序列
 * @Parm:   {Number} leftStart 待排序的左子序列起始位置
 * @Parm:   {Number} leftEnd 待排序的左子序列的结束位置
 * @Parm:   {Number} rightEnd 待排序的右子序列的结束位置   
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

  console.log('lefts: ', lefts)
  console.log('rights: ', rights)

  // 哨兵值，一旦只剩下哨兵值则表明当前数组中的元素已经排序完成
  lefts[i++] = Infinity
  rights[j++] = Infinity

  i = 0
  j = 0

  for(let k=leftStart; k<=rightEnd; k++) {
    if(lefts[i] <= rights[j]) {
      arr[k] = lefts[i]
      i++
    } else {
      arr[k] = rights[j]
      j++
    }
  }
}

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-11-19 19:43:47  
 * @Desc:   归并排序
 * @Parm:   {Array} arr 待排序的总序列
 * @Parm:   {Number} start 待排序的子序列起始位置 
 * @Parm:   {Number} end 待排序的子序列末尾位置 
 */
function mergeSort(arr, start, end) {
  // start>=end则说明数组中只剩下一个元素，单个元素默认排好序，不要进行merge排序
  if(start < end) {
    let division = Math.floor((start + end)/2)
    mergeSort(arr, start, division)
    mergeSort(arr, division + 1, end)
    merge(arr, start, division, end)
  }
}

let arr = [38,27,43,3,9,82,10]
mergeSort(arr, 0, arr.length-1)
// console.log(arr)