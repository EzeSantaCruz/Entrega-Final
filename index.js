import express from 'express'
import {connection} from './db.js'
import {PORT} from './config.js'

const app = express()

const puerto = PORT

connection()
app.listen(puerto, () =>{
    console.log(`Corriendo el server en el puerto ${puerto}`)
})