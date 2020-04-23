const express = require('express')
const app = express()
const port = 3000

const router = require('./routes')

app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')

app.use('/', router)
// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))