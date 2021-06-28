const { writeFile, appendFile } = require('fs')
const { fileHandlerWrapper } = require('./utils')

fileHandlerWrapper({
  method: writeFile,
  path: './proba.txt',
  data: 'SZAMARMESE'
})

fileHandlerWrapper({
  method: appendFile,
  path: './megintproba.txt',
  data: 'Romhányi a rímhányó'
})
