const http = require('http')
const url = require('url')
const { on } = require('process')
const server = http.createServer(function (req, resp) {
    const q = new URL(req.url)
    switch (req.method) {
        case "POST":
            if (q.pathname === '/paste') {
                let longUrl = '';
                req.on('data', function (chunk) {
                    longUrl += chunk
                })
                req.on('end', function (data) {
                    console.log(longUrl)
                    resp.statusCode = 200
                    resp.end('OK\n')
                })
                req.on('error', console.error)
            }
            break;
        case 'GET':
            resp.end('Hello from Server')
            break;    
    }
})
server.listen(9000)