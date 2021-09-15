const http = require('http')
const url = require('url')

const server = http.createServer(function(req, resp){
    const path = url.parse(req.url)
    // resp.write(path.pathname + '\n')
    // resp.write(path.port + '\n')
    // resp.write(path.query + '\n')
    resp.setHeader('Content-Type', 'text/plain;charset=utf-8')
    resp.statusCode = 200
    if (path.pathname === '/cars'){
        resp.end('Spis samochodów')//wywołać tylko raz jako koniec tworzenia odpowiedzi
    } else if (path.pathname === '/users'){
        if (path.query){
            let tokens = path.query.split('=')
            if (tokens[0] == 'name'){
                resp.end('Hello ' + tokens[1])
            } else {
                resp.end('Brak parametru name')
            }
        } else{
            resp.end('Spis użytkowników')
        }
    } else {
        resp.statusCode = 404
        resp.end()
    }
})

server.listen(12000)