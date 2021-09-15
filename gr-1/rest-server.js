const http = require('http');
const url = require('url')
const cars = [
            {marka: "audi", model: "a4"},
            {marka: "fiat", model:'tipo'} 
            ]
const server = http.createServer(function(req, resp){
    const path = url.parse(req.url).pathname;
    if (path.slice(0, 5) === '/cars'){
        switch(req.method){
            case 'GET':
                resp.setHeader('Content-Type','application/json;charset=utf-8')
                resp.end(JSON.stringify(cars))
                break;
            case 'POST':
                let newCar = '';
                req.on('data', function(chunk){
                    newCar += chunk;
                })
                req.on('end', function () {
                    cars.push(JSON.parse(newCar))
                    resp.statusCode = 201
                    resp.end()
                })
                req.on('error', function (error){
                    resp.statusCode = 400
                    resp.end()
                })
                break;
            case 'DELETE':
                const idString = url.parse(req.url).pathname.slice(6);
                const id = parseInt(idString)
                if (isNaN(id)){
                    resp.statusCode = 400
                }
                if (!cars[id]){
                    resp.statusCode = 404;
                }
                const removeCar = cars[id]
                cars.splice(id, 1)
                resp.statusCode = 200
                resp.end(JSON.stringify(removeCar))    
                break;
            default:
            resp.statusCode = 400;
            resp.end()
        }
    } else{
        resp.statusCode = 404;
        resp.end()
    }
})
server.listen(9000)