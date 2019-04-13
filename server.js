const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan')

const port = process.env.PORT || 3000;

app.use(express.json())
app.use(morgan('dev'))

app.get('/app.js', (req, res, next) => res.sendFile(path.join(__dirname, 'dist', 'main.js')));

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));

app.use('/api', require('./app'))


app.listen(port, () => console.log(`listening on port ${port}`))
