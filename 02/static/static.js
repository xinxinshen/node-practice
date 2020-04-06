const fs = require("fs");
const path = require("path");
module.exports = (dirPath = "./public") => {
    return async (ctx, next) => {

        if (ctx.url.indexOf("/public") === 0) {
            // public开头 读取⽂文件
            const url = path.resolve(__dirname, dirPath);
            console.log(ctx.url);

            const fileBaseName = path.basename(url);
            console.log(fileBaseName)
            const filepath = url + ctx.url.replace("/public", "");
            // console.log(ctx.url,url, filepath, fileBaseName) 
            try {
                const stats = fs.statSync(filepath);
                console.log(stats);
                if (stats.isDirectory()) {
                    const dir = fs.readdirSync(filepath);
                    // const
                    const ret = ['<div style="padding-left:20px">'];
                    dir.forEach(filename => {
                        console.log(filename);
                        // 简单认为不不带⼩小数点的格式，就是⽂文件夹，实际应该⽤用statSync 
                        if (filename.indexOf(".") > -1) {
                            ret.push(
                                `<p><a style="color:black" href="${
                      ctx.url
                    }/${filename}">${filename}</a></p>`
                            );
                        } else {
                            // ⽂文件 
                            ret.push(
                                `<p><a href="${ctx.url}/${filename}">${filename}</a></p>`
                            );
                        }
                    });
                    ret.push("</div>");
                    ctx.body = ret.join("");
                } else {
                    console.log("⽂文件");
                    const content = fs.readFileSync(filepath);
                    ctx.body = content;
                }
            } catch (e) {
                // 报错了了 ⽂文件不不存在
                ctx.body = "404, not found";
            }
        } else {
            // 否则不不是静态资源，直接去下⼀一个中间件
            await next();
        }
    };
};