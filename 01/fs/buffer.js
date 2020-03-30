// 创建一个长度为10字节以0填充的Buffer
const buf1 = Buffer.alloc(10);
console.log(buf1)

// 创建一个Buffer包含ascii
const buf2 = Buffer.from('a')
console.log('buf2', buf2.toString())

// 创建一个Buffer包含UTF-8字节
const buf3 = Buffer.from('Buffer创建方法')
console.log('buf3', buf3.toString())

// 写入Buffer数据
buf1.write('hello')
console.log('buf1', buf1.toString())

// 合并Buffer
const buf4 = Buffer.concat([buf1, buf3])
console.log('buf4', buf4)

// 可以尝试修改fs案例输出文件原始内容


