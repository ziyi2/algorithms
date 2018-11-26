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
console.log(addBinary(A, B))