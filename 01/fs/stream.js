const fs = require('fs')
const rs2 = fs.createReadStream('./01.jpeg')
const ws2 = fs.createWriteStream('./02.jpg')
rs2.pipe(ws2)