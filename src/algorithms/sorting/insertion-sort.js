import comparator from '../../utils/comparator/_comparator'

/**
 * @since: 2019-08-14 10:18:17
 * @description: 插入排序
 * @param: {Array} originalArray 需要排序的数组
 * @param: {Function(a: *, b: *)} customComparator 自定义比较方法
 * @returns: {Array} 返回一个新的排序后的数组
 */
function insertionSort (originalArray, customComparator) {
  const array = [...originalArray]
  let currentElement, preIndex
  // 设置自定义的比较方法
  comparator.setCompare(customComparator)

  for (let i = 1; i < array.length; i++) {
    preIndex = i - 1
    // 当前需要排序的元素（第一个元素默认已经排好序）
    currentElement = array[i]
    // 判断前一个元素是否大于当前元素，如果是则前一个元素往后移
    // 直到不存在前一个元素或者前一个元素小于当前元素，则停止移动
    while (preIndex >= 0 && comparator.greaterThan(array[preIndex], currentElement)) {
      array[preIndex + 1] = array[preIndex--]
    }
    // 将当前排序元素插入到移动后的位置
    array[preIndex + 1] = currentElement
  }

  return array
}

export default insertionSort
