

const calc = require('../summ')

const arr = [[1, 2], [2, 3], [1, 2, 3]]

test('Test calc function', () => {
  expect(calc(arr)).toEqual([3, 5, 6])

})
