const { Calculator } = require('./calculator')
const calculator = new Calculator()

calculator.on('start', () =>
  console.log('Start callback called'))

calculator.on('end', (sum) =>
  console.log('Callback call ends', 'Sum:', sum))

calculator.sum(10, 20)
