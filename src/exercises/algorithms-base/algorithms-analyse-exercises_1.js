/** 
 * @Author: zhuxiankang 
 * @Date:   2018-11-26 20:13:43  
 * @Desc:   算法分析习题问题2 
 *          考虑排序存储在A中的n个数：首先找出A中的最小元素并将其与A[0]中的元素进行交换。
 *          接着，找出A中的次最小元素并将其与A[1]进行交换。
 *          对A中前n-1个元素按该方式继续。该算法称为选择算法，写出其伪代码。
 *          该算法维持的循环不变式是什么？
 *          为什么它只需要对前n-1个元素，而不是对所有n个元素运行？
 *          用$\theta$记号给出选择排序的最好运行时间和最差情况运行时间。 
 */


function selectionSort(arr) {
  let array = [...arr],
      length = array.length,
      minIndex,
      template

  // 这里最后一个元素不需要再排序
  for(let i=0; i<length-1; i++) {

    minIndex = i
    
    for(let j=i+1; j<length; j++) {
      if(array[minIndex] < array[j]) continue
      minIndex = j
    }

    template = array[i]
    array[i] = array[minIndex]
    array[minIndex] = template
  }

  return array
}

let arr = [1,4,6,7,3,2,5,11,77,66,99]
console.log(selectionSort(arr))
console.log(arr)