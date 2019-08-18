import insertionSort from '../insertionSort'
import sort from './sort'

describe('insertion-sort', () => {
  it('should sort array', () => {
    sort.testArray(insertionSort)
  })
})
