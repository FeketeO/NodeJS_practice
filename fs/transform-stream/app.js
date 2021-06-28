const { createReadStream, createWriteStream } = require('fs')
const { createGzip } = require('zlib')

const readableStream = createReadStream('./mese.txt', {
  encoding: 'utf-8',
  highWaterMark: 11
})

const writeableStream = createWriteStream('./meseCopy.txt')
const createCompressedFile = createWriteStream('./mese.txt.gz')

readableStream.pipe(writeableStream)
readableStream.pipe
  .pipe(createGzip())
  .pipe(createCompressedFile)
