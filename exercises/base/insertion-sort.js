/**
 * @since: 2019-08-26 15:54:18
 * @description: 问题1
 * @param: {Array} originalArray 被排序的数组
 * @returns:
 */
function insertionSort (originalArray) {
  const array = [...originalArray]
  let currentElement, preIndex
  // 设置自定义的比较方法

  for (let i = 1; i < array.length; i++) {
    preIndex = i - 1
    currentElement = array[i]

    while (preIndex >= 0 && currentElement > array[preIndex]) {
      array[preIndex + 1] = array[preIndex--]
    }
    array[preIndex + 1] = currentElement
  }
  return array
}

/**
 * @since: 2019-08-26 16:27:18
 * @description: 问题2
 * @param: {Array} array 被搜索的数组
 *         {Any} search 搜索项
 * @returns:
 */
function linearSearch (array, search) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === search) {
      return i
    }
  }
  return null
}

/**
 * @since: 2019-08-26 16:40:11
 * @description: 习题3
 * @param: {Array} bin1 二进制数组
 *         {Array} bin2 二进制数组
 * @returns:
 */
function addBinary (bin1, bin2) {
  const length = bin1.length > bin2.length ? bin1.length : bin2.length
  const bin = new Array(length + 1)
  let carry = 0
  let sum
  let i

  for (i = 0; i < length; i++) {
    bin1[i] |= 0
    bin2[i] |= 0
    sum = bin1[i] + bin2[i] + carry
    bin[i] = sum % 2
    carry = Math.floor(sum / 2)
  }

  bin[i] = carry

  return bin
}

export {
  insertionSort,
  linearSearch,
  addBinary
}
