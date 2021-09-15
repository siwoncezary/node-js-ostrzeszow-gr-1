var express = require('express');
var router = express.Router();
const MongoDb = require('mongodb').MongoClient;
const uri = "mongodb+srv://ruser:1234abcd@recordit.lu8hq.mongodb.net/collection?retryWrites=true&w=majority";
const cars = []
/* GET home page. */
router.get('/', function (req, res, next) {
    MongoDb.connect(uri, function(error, client){
        const base = client.db('node-js-strzeszow');
        const cursor = base.collection('cars').find({}); 
        cursor.forEach(element => {
            console.log(element);
        });
        //res.render('cars', { lista: cursor });
    });
});

router.get('/add', function name(req, res, next) {
    res.render('car-form',{});
})

router.post('/add', function(req, res){
    const car = {marka: req.body.marka, model: req.body.model}
    cars.push(car)
    res.send('Dodano do bazy samochód - marka:' + car.marka +' model: ' + car.model)
})

module.exports = router;