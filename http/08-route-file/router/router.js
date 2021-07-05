const htmlResponse = require('../utils/htmlRespons')

const router = {
  '/': res => htmlResponse(res, 'index'),
  '/about': res => htmlResponse(res, 'about'),
  '/contact': res => htmlResponse(res, 'contact'),
  '/404': res => htmlResponse(res, '404')
}

module.exports = Object.freeze(router)
