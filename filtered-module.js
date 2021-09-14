const fs = require('fs')
module.exports = function(dir, extension, callback) {
    fs.readdir(dir, function (err, files) {
        if (err) {
            callback(err, null);
        } else {
            const fileList = files.filter(function (file) {
                return file.endsWith('.' + extension)
            })
            callback(null, fileList)
        }
    });
}