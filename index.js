import express from 'express'
import {connection} from './db.js'
import {PORT} from './config.js'
import bodyParser from 'body-parser'
import { userRouter } from './src/routers/userRouter.js'
import { categoriaRouter } from './src/routers/categoriaRouter.js'

const app = express()

const puerto = PORT

connection()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:true}))

app.use("/api/user", userRouter)
app.use("/api/categoria", categoriaRouter)

app.listen(puerto, () =>{
    console.log(`Corriendo el server en el puerto ${puerto}`)
})