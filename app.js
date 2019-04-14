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

app.put('/campuses/', (req, res, next) => {
    // console.log(req.body, req.params)
    // curl -X PUT -H "Content-Type: application/json" -d '{"name": "campusNameTest", "address": "123 Fake Street"}' http://localhost:3000/api/campuses/1
    // req.body: email & pw. req.params: id
    // will use id later for updating.
    // required campus info:
    const { name, address, imageUrl, description } = req.body
    Campuses.create({
        name,
        address,
        imageUrl,
        description
    })
        .then((campus) => res.json(campus))
        .catch(er => console.error(er))
    // Campuses.create({ name: 'Earth', address: faker.address.streetAddress(), description: faker.lorem.paragraphs(), imageUrl: 'http://www.nasa.gov/centers/goddard/images/content/638831main_globe_east_2048.jpg' }),

})

app.put('/students/', (req, res, next) => {
    // console.log(req.body, req.params)
    // curl -X PUT -H "Content-Type: application/json" -d '{"firstName": "firstNameTest", "lastName": "lastNameTest", "email":"email.gmail.com", "gpa":1}' http://localhost:3000/api/students
    // req.body: email & pw. req.params: id
    // will use id later for updating.
    // required campus info:
    //  Students.create({ firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), gpa: randomGPA() })

    const { firstName, lastName, email, gpa } = req.body
    Students.create({
        firstName,
        lastName,
        email,
        gpa
    })
        .then((student) => res.json(student))
        .catch(next)
})


// curl -X PUT -H "Content-Type: application/json" -d '{"email": "cody@email.com", "password": "12345"}' http://localhost:3000/api/campuses/1


module.exports = app
