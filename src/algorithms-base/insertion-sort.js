/** 
 * @Author: zhuxiankang 
 * @Date:   2018-11-15 08:38:16  
 * @Desc:   插入排序 
 * @Parm:   arr -> 待排序的数组 
 */
function insertionSort(arr) {
  let array = [...arr]
  let key, i
  for(let j = 1; j <= array.length - 1; ++j) {
    // 希望排序的数也称为关键词
    key = array[j]
    i = j - 1
    // 待插入的数据小于当前数据，则当前数据往后移
    while(i >= 0 && array[i] > key) {
      array[i + 1] = array[i]
      -- i
    }
    // 将待插入数据插入合适位置
    array[i + 1] = key
  }
  return array
}

let arr = [5,2,4,6,1,3]
let newArr = insertionSort(arr)
console.log(arr)
console.log(newArr)