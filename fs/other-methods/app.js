// const { fileHandlerCallback } = require('./utils')
const { unlinkWrapper, renameWrapper, copyFileWrapper, statWrapper, chmodWrapper } = require('./utils')

// unlinkWrapper({
//   path: './mese.txt',
//   data: ''
// })

// renameWrapper({
//   oldPath: './POETS_renamed.txt',
//   newPath: './POETS_renamed_again.txt'
// })

// copyFileWrapper({
//   src: './masolando.txt',
//   dest: './destmappa/masolando.txt'
// })

// statWrapper({
//   path: './masolando.txt',
//   callback (err, stats) {
//     if (err) throw err
//     console.log(stats)
//   }
// })

// chmodWrapper({
//   path: './masolando.txt',
//   mode: 744
// })