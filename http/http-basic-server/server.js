const http = require('http')

const port = 8080

http.createServer((req, resp) => {
  resp.write('Helo Node')
  resp.end()
}).listen(port)

console.log(`Server is running at 127.0.0.1:${port}`)
