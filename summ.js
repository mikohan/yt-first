// Here is your task
// we have an array 
// let arr = [[1,2,3], [2,3,5,6], [1,9]]
// Calculate summ of each inner arrays and return result array like const res = [3,5,6]

// Solution is


let arr = [[1, 2, 3], [2, 3, 5, 6], [1, 9]]

function calc(arr) {
  let res = []

  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i].reduce((prev, cur) => prev + cur, 0))
  }
  return res

}

console.log(calc(arr))

module.exports = calc
