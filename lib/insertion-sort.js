'use strict'

exports.__esModule = true
exports['default'] = insertion

function insertion (originalArray) {
  var array = [].concat(originalArray)
  var currentElement, preIndex

  for (var i = 1; i < array.length; i++) {
    preIndex = i - 1
    currentElement = array[i]

    while (preIndex >= 0 && array[preIndex] > currentElement) {
      array[preIndex + 1] = array[preIndex--]
    }

    array[preIndex + 1] = currentElement
  }

  return array
}

module.exports = exports.default
