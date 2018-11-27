/** 
 * @Author: zhuxiankang 
 * @Date:   2018-11-27 19:58:46  
 * @Desc:   插入排序习题问题2
 *          输入：`n`个数的一个序列`A=[a1,a2,a3,...,an]`和一个值`v`
 *          输出：下标`i`使得`v=A[i]`或者`v`不在`A`中出现时，输出`null` 
 */

 function linearSearch(A, v) {
  for(let i=0; i<A.length; i++) {
    if(A[i] === v) {
      return i
    }
  }
  return null
 }  