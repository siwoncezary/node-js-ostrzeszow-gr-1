const fs = require('fs')
fs.readFile(process.argv[2], function(err, data){
    if (err){
        console.log('Error during reading file')
        return;
    }
    console.log(data.toString().split('\n').length - 1) 
});