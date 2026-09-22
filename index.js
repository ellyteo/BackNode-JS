import express from 'express'
import database from './config/database.js'
import clientes from './router/clientes.js'
import atendimento from './router/atendimento.js'

const app = express()

app.use(express.json())

app.use("/api/v1/clientes", clientes)
app.use("/api/v1/atendimento", atendimento)

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