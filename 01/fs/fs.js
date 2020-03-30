// const fs = require('fs')

// // 同步调用
// const data = fs.readFileSync('./conf.js');
// console.log('同步调用:',data);

// // 异步调用
// fs.readFile('./conf.js', (err, data)=>{
//     if(err) return err;
//     console.log('异步调用', data);
// })
// // promisify
// const {promisify} = require('util')
// const readFile = promisify(fs.readFile)
// readFile('conf.js').then(data=>console.log('promisify:', data))

// // fs Promise API node v10
// const fsp = require('fs').promises;
// fsp
//     .readFile('./conf.js')
//     .then(data=>console.log('v10:', data))
//     .catch(err => console.log(err))

// async/await
(async ()=>{
    const fss = require('fs');
    const {promisify} = require('util')
    const readFile = promisify(fss.readFile)
    const data = await readFile('./conf.js')
    Buffer.from(data).toString('utf-8');
    console.log('data', Buffer.from(data).toString('utf-8'))
})()
