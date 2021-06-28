const EventEmitter = require('events')

const eventEmitter = new EventEmitter()

const scream = () => console.log('I can hear a scream')

const tooLateToHelp = () => console.log('too late, she is dead')

const describeTheMurder = ({ height, hairColor }) =>
  console.log(`Height: ${height}, Hair colour: ${hairColor}`)

eventEmitter.on('scream', scream)
eventEmitter.on('scream', tooLateToHelp)
eventEmitter.once('witness', describeTheMurder)

eventEmitter.emit('scream')
eventEmitter.emit('scream')
eventEmitter.emit('scream')
eventEmitter.emit('witness', { height: '180cm', hairColor: 'brown' })
eventEmitter.emit('witness', { height: '180cm', hairColor: 'brown' })
eventEmitter.emit('witness', { height: '180cm', hairColor: 'brown' })
eventEmitter.off('scream', tooLateToHelp)
eventEmitter.emit('scream')
