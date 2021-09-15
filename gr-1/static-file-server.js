const http = require('http')
const fs = require('fs')
const file = 'index.html'
const server = http.createServer(function(req, resp){
    const read = fs.createReadStream(file);
    resp.statusCode = 200
    resp.setHeader('Content-Type', 'text/html;charset=utf-8')
    read.pipe(resp)
})

server.listen(9000)