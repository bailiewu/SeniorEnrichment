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

app.get('/students/:id', (req, res, next) => {
    const id = req.params.id
    Students.findByPk(id,
        {
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

app.get('/campuses/:id', (req, res, next) => {
    const id = req.params.id
    Campuses.findByPk(id
        , {
            include: {
                model: Students
            }
        })
        .then((campus) => {
            res.json(campus)
        })
        .catch(next)
})

app.put('/campuses/:id', (req, res, next) => {
    console.log(req.body, req.params)
    res.send('ok we did a campus put')
})

// curl -X PUT -H "Content-Type: application/json" -d '{"email": "cody@email.com", "password": "12345"}' http://localhost:3000/api/campuses/1


module.exports = app
