const { connection, Sequelize } = require('./connection')

const Students = connection.define('student', {
    firstName: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    lastName: {
        type: Sequelize.TEXT,
        allowNull: false,

        validate: {
            notEmpty: true
        }
    },
    email: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },
    imageUrl: {
        type: Sequelize.TEXT,
        validate: {
            isUrl: true
        }
    },
    gpa: {
        type: Sequelize.DECIMAL(2, 1),
        defaultValue: 0,
        validate: {
            min: 0,
            max: 4,
        }
    }
}, {
        hooks: {
            beforeValidate: (student) => {
                if (!student.email) {
                    student.email = 'temp@gmail.com'
                }
                if (!student.imageUrl) {
                    student.imageUrl = 'https://images.pexels.com/photos/53453/marilyn-monroe-woman-actress-pretty-53453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                }
            }
        }
    })

module.exports = Students
