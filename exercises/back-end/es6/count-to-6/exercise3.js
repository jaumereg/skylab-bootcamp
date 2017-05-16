var files = process.argv.slice(2)

var result = files.map(file => file[0]).join('')

console.log(`[${files}] becomes "${result}"`)
// console.log('[' + files + '] becomes \\"' + result + "\\"')