const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8080
const Contenedor = require('./contenedor')
const users = new Contenedor('./users.txt')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const user = [{
    email: "die@prueba.com",
    fullName: "diego Estela"
},{
    email: "ezequiel@prueba.com",
    fullName: "ezequiel prueba"
}
]

app.get('/users', async (req, res) => {
    const allUser = await users.getAll()
    res.status(300).send(allUser)
    res.status(400)
})


app.post('/save', async (req, res) => {
    await users.save(req.body)
    res.send("ok")
})








const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
