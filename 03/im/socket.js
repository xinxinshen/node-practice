const net = require('net')
const chatServer = net.createServer()
const chatList = []
chatServer.on('connection', client => {
    client.write('Hi')
    chatList.push(client);
    client.on('data', data => {
        console.log('received ', data.toString())
        chatList.forEach(v => {
            v.write(data)
        })
    })
})
chatServer.listen(9000)