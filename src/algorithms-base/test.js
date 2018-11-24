function addBinary(A, B) {

  let ALength = A.length,
      BLength = B.length,
      length = ALength > BLength ? ALength : BLength,
      C = new Array(length + 1),
      J = 0,
      i,
      sum

  for(i=0; i<length; i++) {
    A[i] |= 0
    B[i] |= 0

    sum = A[i] + B[i]

    if(sum + J >= 2) {
      C[i] = 0
      J = 1
    } else {
      C[i] = sum + J
      J = 0
    }
  }

  C[i+1] = J
  return C

}

let A = [1,1,1,1]
    B = [0,0,1,1]
console.log(addBinary(A, B))