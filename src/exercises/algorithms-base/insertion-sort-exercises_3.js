/** 
 * @Author: zhuxiankang 
 * @Date:   2018-11-26 20:13:27  
 * @Desc:   插入排序习题问题2 
 * @Parm:   考虑把两个n位二进制整数加起来的问题，这两个整数分别存储在两个n元数组A和B中。
 *          这两个整数的和应按二进制形式存储在一个（n + 1）元的数组C中，请给出该问题的形式化描述，并写出`javascript`代码实现。 
 */

function addBinary(A, B) {

  let ALength = A.length,
      BLength = B.length,
      length = ALength > BLength ? ALength : BLength,
      C = new Array(length + 1),
      carry = 0,
      sum,
      i

  for(i=0; i<length; i++) {
    A[i] |= 0
    B[i] |= 0
    sum = A[i] + B[i] + carry 
    C[i] = sum % 2
    carry = Math.floor(sum / 2)
  }

  C[i] = carry

  return C

}


let A = [1,1,1,1]
    B = [0,0,1,1]
// console.log(addBinary(A, B))