const {promisify} = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
const log = content => console.log(chalk.green(content))
const open = require('open')

module.exports = async name => {
    clear()
    const data = await figlet('Hello world')
    log(data)
}
const {clone} = require('./download')
// 安装依赖
const spawn = async (...args) =>{
    const {spawn} = require('child_process')
    return new Promise(resolve=>{
        const proc = spawn(...args)
        proc.stdout.pipe(process.stdout)
        proc.stderr.pipe(process.stderr)
        proc.on('close', ()=>{
            resolve()
        })
    })
}
module.exports = async name =>{
//   log('create project: ' + name)
//     await clone('github:su37josephxia/vue-template', name)
//     log('install depend')
//     await spawn('npm', ['install'], {cwd: `./${name}`})
//     log(chalk.green(`success!!!`))  
    open(`http://localhost:8080`)
    await spawn('npm', ['run', 'serve'], {cwd: `./${name}`})
}