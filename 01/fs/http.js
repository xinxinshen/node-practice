const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res)=>{
    console.log('there is a request')
    console.log('res', getPrototypeChain(res))
    const {url, method} = req;
    // 怎么写更加方便一些
    if(url==='/' && method === 'GET') {
        fs.readFile('index.html', (err, data)=>{
            if(err) {
                res.writeHead(500, {
                    'Content-Type': 'text/plain;charset=utf-8'
                })
                Response.end('500, 服务器错误')
                return
            } 
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html')
            res.end(data)
        })
    } else if(url === '/users' && method === 'GET'){
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify([{name:'tom', age: 20}]))
    } else if(method === 'GET' && Headers.accept.indexOf('image/*')!== -1) {
        fs.createReadStream('.'+url).pipe(res)
    }else {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/plain;charset=utf-8')
        res.end('404, 页面没有找到')
    }
})
server.listen(3000)

// 打印原型链
function getPrototypeChain(obj) {
    var protoChain = [];
    while(obj = Object.getPrototypeOf(obj)) {
        protoChain.push(obj)
    }
    protoChain.push(null)
    return protoChain;
}