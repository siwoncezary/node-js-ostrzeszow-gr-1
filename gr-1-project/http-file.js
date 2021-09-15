const fs = require('fs')
const http = require('http')
const port = process.argv[2]
const pathFile = process.argv[3]
const server = http.createServer(function(req, resp){
    resp.writeHead(200, {"content-type": "text/plain"})
    fileStream = fs.createReadStream(pathFile)
    fileStream.pipe(resp)
})

server.listen(port)