// const even = arr => arr.filter(item => item % 2 === 0)
// const odd = arr => arr.filter(item => item % 2 !== 0)

// module.exports = Object.freeze{
//   even: even,
//   odd: odd
// }

// module.exports.even = even,
// module.exports.odd = odd
// ------>

module.exports.even = arr => arr.filter(item => item % 2 === 0)
module.exports.odd = arr => arr.filter(item => item % 2 !== 0)
