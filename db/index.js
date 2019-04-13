const { connection } = require('./connection')
const Campuses = require('./campuses')
const Students = require('./students')
const faker = require('faker')

Students.belongsTo(Campuses)
Campuses.hasMany(Students)

const randomGPA = () => {
    return Math.random() * 4
}

const createStudent = () => {
    return Students.create({ firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), gpa: randomGPA() })
}

// const createCampus = () => {
//     return Campuses.create({ name: faker.company.companyName(), address: faker.address.streetAddress(), description: faker.lorem.paragraphs() })
// }

const syncAndSeed = () => {
    return connection.sync({ force: true })
        .then(() => {
            return Promise.all([
                Campuses.create({ name: 'Earth', address: faker.address.streetAddress(), description: faker.lorem.paragraphs(), imageUrl: 'http://www.nasa.gov/centers/goddard/images/content/638831main_globe_east_2048.jpg' }),
                Campuses.create({ name: 'Mars', address: faker.address.streetAddress(), description: faker.lorem.paragraphs(), imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1200px-OSIRIS_Mars_true_color.jpg' }),
                Campuses.create({ name: 'Saturn', address: faker.address.streetAddress(), description: faker.lorem.paragraphs(), imageUrl: 'https://planetary.s3.amazonaws.com/assets/images/5-jupiter/2016/20160525_1981_07_12_OGB_Saturn_and_Rhea_Tethys_Encelad.png' }),
                Campuses.create({ name: 'Jupiter', address: faker.address.streetAddress(), description: faker.lorem.paragraphs(), imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/220px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg' }),
                Campuses.create({ name: 'Neptune', address: faker.address.streetAddress(), description: faker.lorem.paragraphs(), imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/1200px-Neptune_Full.jpg' }),
                Campuses.create({ name: 'Venus', address: faker.address.streetAddress(), description: faker.lorem.paragraphs(), imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/220px-Venus-real_color.jpg' }),
                // createCampus()
            ])
        })
        .then(() => {
            return Promise.all([
                createStudent(),
                createStudent(),
                createStudent(),
                createStudent(),
                createStudent(),
                createStudent(),
                createStudent(),
                createStudent(),
                createStudent(),
                createStudent(),
            ])
        })
        .then(([...students]) => {
            students[0].setCampus(1)
            students[1].setCampus(2)
            students[2].setCampus(2)
            students[3].setCampus(1)
            students[4].setCampus(1)
            students[5].setCampus(2)
            students[6].setCampus(3)
            students[6].setCampus(4)


        })
        .catch(error => console.log(error))
}
module.exports = {
    syncAndSeed,
    models: {
        Campuses,
        Students
    }
}
