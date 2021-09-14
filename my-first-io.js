const fs = require('fs')
const file = process.argv[2]
const lines = fs.readFileSync(file)
console.log(lines.toString().split('\n').length - 1)