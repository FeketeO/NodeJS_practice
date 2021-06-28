const { createReadStream } = require('fs')

const readableStream = createReadStream('./mese.txt', {
  encoding: 'utf-8',
  highWaterMark: 11
})

readableStream.on('data', (chunk) => {
//   console.log(chunk)
  process.stdout.write(chunk)
})
