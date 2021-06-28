const { createReadStream, createWriteStream } = require('fs')

const readableStream = createReadStream('./mese.txt', {
  encoding: 'utf-8',
  highWaterMark: 11
})

const writeableStream = createWriteStream('./meseCopy.txt')

readableStream.pipe(writeableStream)
