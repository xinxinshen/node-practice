// koa的⽬标是用更简单化、流程化、模块化的⽅式实现回调部分
const http = require('http')
const context = require("./context");
const request = require("./request");
const response = require("./response");
class XXS {
    use(callback) {
        this.middlewares.push(callback);
    }
    constructor() {
        this.middlewares = []
    }
    listen(...args) {
        const server = http.createServer(async (req, res) => {
            let ctx = this.createContext(req, res);
            // this.callback(ctx);
            // 
            const fn = this.compose(this.middlewares)
            await fn(ctx)
            res.end(ctx.body);
        })
        server.listen(...args);
    }
    // 构建上下⽂文, 把res和req都挂载到ctx之上，并且在ctx.req和ctx.request.req同时保存
    createContext(req, res) {
        const ctx = Object.create(context);
        ctx.request = Object.create(request);
        ctx.response = Object.create(response);
        ctx.req = ctx.request.req = req;
        ctx.res = ctx.response.res = res;
        return ctx;
    }
    /**
     * 中间件组合
     *
     * @param {*} middlewares
     * @returns
     * @memberof XXS
     */
    compose(middlewares) {
        return function (ctx) {
            return dispatch(0);
            // 执⾏行行第0个
            function dispatch(i) {
                let fn = middlewares[i];
                if (!fn) {
                    return Promise.resolve();
                }
                return Promise.resolve(
                    fn(ctx, function next() {
                        // promise完成后，再执⾏行行下⼀一个
                        return dispatch(i + 1);
                    })
                );
            }
        };
    }
}
module.exports = XXS;