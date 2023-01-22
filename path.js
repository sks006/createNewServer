const path = require('path')

const MycurrentPath = __filename

console.log(path.basename(MycurrentPath))
console.log(path.basename(__dirname))
console.log(path.extname(MycurrentPath))
console.log(path.join(__dirname, 'test', 'math.js'))
console.log(path.parse(MycurrentPath))