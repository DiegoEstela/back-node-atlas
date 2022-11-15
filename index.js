const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT ||  8080
const mongoose = require('mongoose')
require('dotenv').config();
const userRouter = require('./src/routes/users')


app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose
.connect(process.env.MONGO_URI)
.then(()=> console.log("se conecto correctamente"))
.catch((err)=> console.error(err))

app.use('/api', userRouter)

app.get('/', async (req, res) => {
    res.send("Bienvenidx a mi Api")

})


app.post('/save', async (req, res) => {
    await users.save(req.body)
    res.send("ok")
})








const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

