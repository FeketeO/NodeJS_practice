const { reader } = require('./reader')
const { EventEmitter } = require('events')
const eventEmitter = new EventEmitter()

// const app = reader(eventEmitter)
const { readContent, printContent, close, errorHandler } = reader(eventEmitter)

eventEmitter.on('read', readContent)
eventEmitter.on('print', printContent)
eventEmitter.on('close', close)
eventEmitter.on('error', errorHandler)

eventEmitter.emit('read', './mese.txt')
