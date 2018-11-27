/** 
 * @Author: zhuxiankang 
 * @Date:   2018-11-26 20:13:06  
 * @Desc:   插入排序习题问题1 
 * @Parm:   重写插入排序过程，使之按非升序排序。 
 */


function insertionSort(arr) {
  let array = [...arr]

  for(let i=1; i<array.length; i++) {
    let key = array[i],
        j = i - 1

    while(j>=0 && key>array[j]) {
      array[j + 1] = array[j]
      j--
    }

    array[j + 1] = key
  }

  return array
}