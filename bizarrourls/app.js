const http = require('http')
const { PORT = 3000 } = process.env

http.createServer((req, res) => {
  res.end('Hello Denver Microservices!\n')
}).listen(PORT)