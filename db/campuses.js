const { connection, Sequelize } = require('./connection')

const Campuses = connection.define('campus', {
    name: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    imageUrl: {
        type: Sequelize.TEXT,
        defaultValue: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg',
        validate: {
            isUrl: true
        }
    },
    address: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    description: Sequelize.TEXT
})

module.exports = Campuses
