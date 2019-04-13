const Sequelize = require('sequelize')
const connection = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/campus-student', {
    logging: false
})

module.exports = { connection, Sequelize }
