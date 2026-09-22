import express from 'express'
import database from './config/clientes.js'
import clientes from './router/clientes.js'

const app = express()

app.use(express.json())

app.use("/api/v1/clientes", clientes)

database.db
    .sync({ force: false })
    .then((_) => {
        app.listen(3000, () => {
            console.log("Servidor ouvindo na porta 3000")
        })
    })
    .catch((e) => {
        console.log(e)
    })