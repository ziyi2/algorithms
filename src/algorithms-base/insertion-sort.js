/** 
 * @Author: zhuxiankang 
 * @Date:   2018-11-15 08:38:16  
 * @Desc:   插入排序 
 * @Parm:   {Array} arr 待排序的序列
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
// console.log(arr)
// console.log(newArr)

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-11-24 15:42:54  
 * @Desc:   插入排序(降序) 
 * @Parm:   {Array} arr 待排序的总序列 
 */
function insertionReverseSort(arr) {
  let array = [...arr]

  for(let i=1; i<array.length; i++) {
    let key = array[i]
    let j = i - 1

    while(j>=0 && key>array[j]) {
      array[j + 1] = array[j]
      j--
    }

    array[j + 1] = key
  }

  return array
}

newArr = insertionReverseSort(arr)
// console.log(arr)
// console.log(newArr)
