#!/usr/bin/env node
// 指定脚本解释器为node

console.log('cli......ss')

// 定制命令行界面
const program = require('commander')
program.version(require('../package').version)

// program
//     .command('init <name>')
//     .description('init project')
//     .action(name=>{
//         console.log('init '+name)
//     })
// 打印欢迎界面
// program
//     .command('init <name>')
//     .description('init project')
//     .action(require('../lib/init'))
// // program.parse(process.argv)
// 约定路由功
program
    .command('refresh')
    .description('refresh routers...')
    .action(require('../lib/refresh'))


program.parse(process.argv)
