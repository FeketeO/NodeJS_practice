const even = arr => arr.filter(item => item % 2 === 0)
const odd = arr => arr.filter(item => item % 2 !== 0)

// const multiplyByRandom = (arr, to) =>
// arr.map(item => item * Math.floor(Math.random() * to ) + 1)

const generateRandom = (to) => Math.floor(Math.random() * to) + 1

const multiplyByRandom = (arr, to) =>
  arr.map(item => item * generateRandom(to))
module.exports = {
  even: even,
  odd: odd,
  multiplyByRandom: multiplyByRandom
}
