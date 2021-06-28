const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'))

const truncateAndPrintFile = async (file, length, bufferSize) => {
  const fd = await fs.openAsync(file, 'r+')
  await fs.ftruncateAsync(fd, length)
  const buffer = Buffer.alloc(bufferSize)
  const bytes = await fs.readAsync(fd, buffer, 0, buffer.length, 0)
  if (bytes > 0) console.log(buffer.slice(0, bytes).toString())
  await fs.closeAsync(fd)
}

// callbackes verzió:
// const truncateAndPrintFile = (file, length, bufferSize) => {
//   fs.open(file, 'r+', (err, fd) => {
//     if (err) throw err
//     fs.ftruncate(fd, length, (err) => {
//       if (err) throw err
//       const buffer = Buffer.alloc(bufferSize)
//       fs.read(fd, buffer, 0, buffer.length, 0, (err, bytes) => {
//         if (err) throw err
//         if (bytes > 0) console.log(buffer.slice(0, bytes).toString())
//         fs.close(fd, (eror) => {
//           if (err) throw err
//         })
//       })
//     })
//   })
// }

module.exports = {
  truncateAndPrintFile
}
