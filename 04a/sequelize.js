(async ()=>{
    const Sequelize = require('sequelize')
    const sequelize = new Sequelize('kaikeba', 'root', 'example', {
        host: 'localhost',
        dialect: 'mysql'
    })

    // 定义模型
    const Fruit = sequelize.define('Fruit', {
        id: {
            // type: Sequelize.DataType.
        },
        name:{type: Sequelize.STRING(20)},
        price:{type: Sequelize.FLOAT, allowNull: false},
        stock: {type: Sequelize.INTEGER, defaultValue:0}
    })

    // let ret = await Fruit.sync({force: true})
    let ret = await Fruit.sync()
    console.log('select', JSON.stringify(ret));
    ret = await Fruit.create({
        name: 'Banana',
        price: 3.5,
        stock: 30,
    })
    console.log('select', JSON.stringify(ret));
    ret = await Fruit.update({
        price: 4
    }, {
        where:{
            name: 'banana',
        }
    })
    
    console.log('select', JSON.stringify(ret));
    const Op = Sequelize.Op;
    ret = await Fruit.findAll({
        where: {
            price: {[Op.lt]:5, [Op.gt]:2}
        }
    })
    console.log('select', JSON.stringify(ret));
})()