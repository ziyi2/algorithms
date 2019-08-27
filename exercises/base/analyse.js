/**
 * @since: 2019-08-26 21:14:29
 * @description: 问题2
 * @param:
 * @returns:
 */
function selectionSort (originalArray) {
  const array = [...originalArray]
  const length = array.length
  let minIndex
  let template

  // 这里最后一个元素不需要再排序
  for (let i = 0; i < length - 1; i++) {
    minIndex = i

    for (let j = i + 1; j < length; j++) {
      if (array[minIndex] < array[j]) continue
      minIndex = j
    }

    template = array[i]
    array[i] = array[minIndex]
    array[minIndex] = template
  }

  return array
}

export {
  selectionSort
}
