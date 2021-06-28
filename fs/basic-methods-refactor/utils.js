const fileHandlerCallback = (err) => {
  if (err) throw err
  console.log('file chnaged')
}
const fileHandlerWrapper = ({ method, path, data, callback = fileHandlerCallback } = {}) => {
  method(path, data, callback)
}

module.exports = {
  fileHandlerWrapper
}
