
export default {
  /**
   * @since: 2019-08-19 09:01:07
   * @description: 设置比较方法
   * @param: {Function(a: *, b: *)} compareFunction 自定义比较方法
   * @returns:
   */
  setCompare (compareFunction) {
    this.compare = compareFunction || this.defaultCompare
    return this
  },

  /**
   * @since: 2019-08-19 09:02:06
   * @description: 默认比较方法
   * @param: {*} a 变量1
   * @param: {*} b 变量2
   * @returns:
   */
  defaultCompare (a, b) {
    if (a === b) {
      return 0
    }
    return a > b ? 1 : -1
  },

  /**
   * @since: 2019-08-19 09:03:09
   * @description: 判断a和b是否相等
   * @param: {*} a 变量1
   * @param: {*} b 变量2
   * @returns:
   */
  equal (a, b) {
    return this.compare(a, b) === 0
  },

  /**
   * @since: 2019-08-19 09:06:42
   * @description: 判断a是否大于b
   * @param: {*} a 变量1
   * @param: {*} b 变量2
   * @returns:
   */
  greaterThan (a, b) {
    return this.compare(a, b) > 0
  },

  /**
   * @since: 2019-08-19 09:07:49
   * @description: 判断a是否小于b
   * @param: {*} a 变量1
   * @param: {*} b 变量2
   * @returns:
   */
  lessThan (a, b) {
    return this.compare(a, b) < 0
  },

  /**
   * @since: 2019-08-19 09:08:52
   * @description: 判断a是否小于或等于b
   * @param: {*} a 变量1
   * @param: {*} b 变量2
   * @returns:
   */
  lessThanOrEqual (a, b) {
    return this.lessThan(a, b) || this.equal(a, b)
  },

  /**
   * @since: 2019-08-19 09:09:49
   * @description: 判断a是否大于或等于b
   * @param: {*} a 变量1
   * @param: {*} b 变量2
   * @returns:
   */
  greaterThanOrEqual (a, b) {
    return this.greaterThan(a, b) || this.equal(a, b)
  }
}
