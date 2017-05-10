var fs = require('fs')

var text = fs.readFileSync(process.argv[2], 'utf8')

var arrayLines = text.split('\n')

console.log(arrayLines.length - 1)