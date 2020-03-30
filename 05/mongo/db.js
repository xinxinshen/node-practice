const conf = require('./conf')
const { EventEmitter } = require('mongodb')

const {MongoClient} = require('mongodb')
/**
 *
 *
 * @class Mongodb
 */
class Mongodb {
    constructor(conf) {
        // 保存conf
        this.conf = conf

        this.emitter = new EventEmitter()
        // 建立数据库连接，发送connect事件
        this.client = new MongoClient(conf.url, {useNewUrlParser: true})
        this.client.connect(err=>{
            if(err) throw err
            console.log('connect success')   
            this.emitter.emit('connect')

        })
    } 
    /**
     * 返回集合
     *
     * @memberof Mongodb
     */
    col(colName, ) {

    }
    /**
     *
     *用于订阅连接事件
     * @param {*} event
     * @param {*} cb
     * @memberof Mongodb
     */
    once(event, cb) {
        this.emitter.once(event, cb)
    }

    
}

module.exports = new Mongodb(conf)