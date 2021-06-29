const { readFileSync, writeFileSync } = require('fs')

const MoviesApi = (path, prop) => ({
  get () {
    const dataString = readFileSync(path)
    return JSON.stringify(dataString)[prop]
  },

  save (data) {
    writeFileSync(path, JSON.stringify({ [prop]: data }))
  }
})

module.exports = Object.freeze(MoviesApi)
