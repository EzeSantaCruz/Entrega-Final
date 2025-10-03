import mongoose from "mongoose";
//luego importar lo del env

export const connection = async () => {
    try
    {
        await mongoose.connect(`${}`)
        console.log("Base de datos conectada")
    }
    catch(error)
    {
        console.error("Error al conectarse a la base de datos")
        process.exit(1)
    }
}