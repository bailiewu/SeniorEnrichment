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
}, {
        hooks: {
            beforeValidate: (campus) => {
                if (!campus.imageUrl) campus.imageUrl = 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg'

            }
        }
    })

module.exports = Campuses
