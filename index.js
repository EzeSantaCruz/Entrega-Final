import express from 'express'
import {connection} from './db.js'
import {PORT} from './config.js'
import bodyParser from 'body-parser'
import { userRouter } from './src/routers/userRouter.js'
import { categoriaRouter } from './src/routers/categoriaRouter.js'
import { productoRouter } from './src/routers/productoRouter.js'
import { stockRouter } from './src/routers/stockRouter.js'
import { ordenRouter } from './src/routers/odenRouter.js'
const app = express()

const puerto = PORT
app.use(cors({

    origin: "*",
    
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"]
}))

connection()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:true}))

app.use("/api/user", userRouter)
app.use("/api/categoria", categoriaRouter)
app.use("/api/producto", productoRouter)
app.use("/api/producto/Stock", stockRouter)
app.use("/api/orden", ordenRouter)
app.listen(puerto, () =>{
    console.log(`El servidor corriendo en el puerto ${puerto}`)
})