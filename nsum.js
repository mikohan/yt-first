
const arr = [[2, 3, 4], [1, 2, 3], [1, 3]]

function calc(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    let r = arr[i].reduce((prev, cur) => prev + cur, 0);
    res.push(r)
  }
  return res

}

module.exports = calc
