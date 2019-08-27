export const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
export const reverseArray = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
export const randomArray = [15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19]
export const equalArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
export const equalNegativeArray = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
export const negativeArray = [-1, 0, 5, -10, 20, 13, -7, 3, 2, -3]
export const sortedNegativeArray = [-10, -7, -3, -1, 0, 2, 3, 5, 13, 20]

export default {
  testNormal (sort) {
    expect(sort([])).toEqual([])
    expect(sort([1])).toEqual([1])
    expect(sort([1, 2])).toEqual([1, 2])
    expect(sort([2, 1])).toEqual([1, 2])
    expect(sort([3, 4, 2, 1, 0, 0, 4, 3, 4, 2])).toEqual([0, 0, 1, 2, 2, 3, 3, 4, 4, 4])
    expect(sort(sortedArray)).toEqual(sortedArray)
    expect(sort(reverseArray)).toEqual(sortedArray)
    expect(sort(randomArray)).toEqual(sortedArray)
    expect(sort(equalArray)).toEqual(equalArray)
  },

  testWithCustomComparator (sort) {
    const sortWithCustomComparator = array => sort(array, (a, b) => {
      if (a.length === b.length) {
        return 0
      }
      return a.length < b.length ? -1 : 1
    })
    expect(sortWithCustomComparator([''])).toEqual([''])
    expect(sortWithCustomComparator(['a'])).toEqual(['a'])
    expect(sortWithCustomComparator(['aa', 'a'])).toEqual(['a', 'aa'])
    expect(sortWithCustomComparator(['aa', 'q', 'bbbb', 'ccc'])).toEqual(['q', 'aa', 'ccc', 'bbbb'])
    expect(sortWithCustomComparator(['aa', 'aa'])).toEqual(['aa', 'aa'])
  },

  testNegative (sort) {
    expect(sort(negativeArray)).toEqual(sortedNegativeArray)
  }
}
