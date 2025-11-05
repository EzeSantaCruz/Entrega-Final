import mongoose from "mongoose";
import {MONGODB_URI, DB_NAME} from './config.js'

export const connection = async () => {
    try
    {
        await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`)
        console.log("Base de datos conectada")
    }
    catch(error)
    {
        console.error("Error al conectarse a la base de datos")
        process.exit(1)
    }
}