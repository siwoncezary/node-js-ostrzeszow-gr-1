const filteredLs = require('./filtered-module')
filteredLs(process.argv[2], process.argv[3], function (err, list){
    if (err){
        console.log(err)
    } else {
        list.forEach(element => {
            console.log(element)
        });
    }
})