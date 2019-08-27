import { insertionSort, linearSearch, addBinary } from '../insertion-sort'

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const reverseArray = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
const randomArray = [15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19]
const equalArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

describe('insertion-sort-exercise', () => {
  it('exercise1: insertionSort', () => {
    expect(insertionSort([])).toEqual([])
    expect(insertionSort(sortedArray)).toEqual(reverseArray)
    expect(insertionSort(randomArray)).toEqual(reverseArray)
    expect(insertionSort(equalArray)).toEqual(equalArray)
  })

  it('exercise2: linearSearch', () => {
    expect(linearSearch([1, 4, 5, 2], 5)).toEqual(2)
    expect(linearSearch([3, 1, 4, 5, 2], 4)).toEqual(2)
  })

  it('exercise3: addBinary', () => {
    expect(addBinary([1, 1, 1], [1])).toEqual([0, 0, 0, 1])
    expect(addBinary([1, 1, 1, 1], [1, 1])).toEqual([0, 1, 0, 0, 1])
  })
})
