const app = require('express')()
const { Students, Campuses } = require('./db/index').models

app.get('/students', (req, res, next) => {
    Students.findAll({
        order: ['firstName', 'lastName'],
        include: {
            model: Campuses
        }
    })
        .then((student) => {
            res.json(student)
        })
        .catch(next)
})

app.get('/campuses', (req, res, next) => {
    Campuses.findAll({
        order: ['name'],
        include: {
            model: Students
        }
    })
        .then((campus) => {
            res.json(campus)
        })
        .catch(next)
})


module.exports = app