const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT ||  8080
const mongosse = require('mongoose')
const bodyParser = require('body-parser')
const Contenedor = require('./contenedor')
const users = new Contenedor('./users.txt')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongosse.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifieldTopology: true })


app.get('/users', async (req, res) => {
    res.send("se conecto correctamente")

})


app.post('/save', async (req, res) => {
    await users.save(req.body)
    res.send("ok")
})








const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

/* mongodb+srv://DieEstela:<password>@dbdieestela.3fvflkz.mongodb.net/?retryWrites=true&w=majority */