const { resolve, join } = require('path')

console.log(resolve())
console.log(join())
console.log(__dirname)

console.log(resolve('./mese.txt'))
console.log(__dirname, './mese.txt');
