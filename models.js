const db = new Sequelize('postgres://localhost5432/plantr')
module.exports = db


const Garderner = db.define('',{
    name: Sequelize.STRING,
    age: Sequelize.INTEGER
})

const Plot = db.define('',{
    size: Sequelize.INTEGER,
    shaded: Sequelize.BOOLEAN

})

const Vegetable = db.define('',{
    name: Sequelize.STRING,
    color: Sequelize.STRING,
    planted_on: Sequelize.DATE

})

