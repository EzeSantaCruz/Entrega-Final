import orden from "../models/ordenModel.js";

export const crearOrden = async (data) =>{
    const nuevaOrden = new orden(data)
    const resultado = await nuevaOrden.save()
    return {resultado}
}


export const getOrdenes = async ()=>{
    const data = await orden.find().populate("items.producto")
        if(data.length === 0){
            const error = new Error("No hay oredenes")
            error.statusCode = 404
            throw error
        }
    
        return data
}