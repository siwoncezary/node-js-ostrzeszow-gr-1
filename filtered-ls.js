const fs = require('fs')
const dir = process.argv[2]
const extension = process.argv[3]
fs.readdir(dir, function(err, data){
    data.filter(function(file) {
        return file.endsWith('.' + extension)
    }).forEach(function(item){
        console.log(item)
    })
});