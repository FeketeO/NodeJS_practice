const { EventEmitter } = require('./EventEmitter')

const eventEmitter = new EventEmitter()

eventEmitter.on('speak', () => console.log('first function with speak'))
eventEmitter.on('speak', () => console.log('second event with speaking'))
eventEmitter.on('walk', () => console.log('walking, walking'))

eventEmitter.emit('speak')
eventEmitter.emit('walk')
eventEmitter.emit('eat')
