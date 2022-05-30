const calc = require('../nsum')

const arr = [[1, 2], [2, 2], [2, 2, 2]]

test('Some code should pass the test', () => {
  expect(calc(arr)).toEqual([3, 4, 6])
})
