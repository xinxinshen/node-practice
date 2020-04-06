const add = (x, y) => x + y
const square = z => z * z
const fn = (x, y) => square(add(x, y))
// 不是通用的，参数个数是有限制的
const compose = (fn1, fn2) => (...args) => fn2(fn1(...args))
const fn2 = compose(add, square)

const compose2 = (...[first, ...other]) => (...args) => {
    let ret = first(...args)
    other.forEach(fn => {
        ret = fn(ret)
    })
    return ret
}

const fn3 = compose2(add, square)

const fn4 = compose2(add, square, square)

console.log(`fn1`, fn(1, 2))
console.log(`fn2`, fn2(1, 2))
console.log(`fn3`, fn3(1, 2))
console.log(`fn4`, fn4(1, 2))