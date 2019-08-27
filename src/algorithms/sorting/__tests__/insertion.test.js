import insertion from '../insertion-sort'
import sort from './sort'

describe('insertion-sort', () => {
  it('should sort normal', () => {
    sort.testNormal(insertion)
  })

  it('should sort with custom comparator', () => {
    sort.testWithCustomComparator(insertion)
  })

  it('should sort negative', () => {
    sort.testNegative(insertion)
  })
})
