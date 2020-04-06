const XXS = require('./xxs.js')
const Router = require('./router.js')
const app = new XXS();
const router = new Router();
const staticFile = require('./static.js');

// 静态⽂文件服务koa-static
// 配置绝对资源⽬目录地址，默认为static 获取⽂文件或者⽬目录信息
// 静态⽂文件读取
// 返回
app.use(staticFile(__dirname + '/public'));
// router.get('/index', async ctx => {
//     ctx.body = 'index page';
// });
// router.get('/post', async ctx => {
//     ctx.body = 'post page';
// });
// router.get('/list', async ctx => {
//     ctx.body = 'list page';
// });
// router.post('/index', async ctx => {
//     ctx.body = 'post page';
// });
// // 路由实例输出⽗中间件 router.routes() 
// app.use(router.routes());


// const delay = () => new Promise(resolve => setTimeout(() => resolve(), 2000));
// app.use(async (ctx, next) => {
//     ctx.body = "1";
//     await next();
//     ctx.body += "5";
// });
// app.use(async (ctx, next) => {
//     ctx.body += "2";
//     await delay();
//     await next();
//     ctx.body += "4";
// });
// app.use(async (ctx, next) => {
//     ctx.body += "3";
// });
app.listen(3000, () => {
    console.log('a');
})