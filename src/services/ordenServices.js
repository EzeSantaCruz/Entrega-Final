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

export const deleteOrdenes = async (idOrden)=>{
    const exist = await orden.findOne({_id: idOrden})
    if(!exist){
        const error = new Error(`Orden con ID ${idOrden} no existe`)
        error.statusCode = 404
        throw error
    }

    await orden.findByIdAndDelete(idOrden)
    return {message: "ORDEN ELIMINADA CORRECTAMENTE"}
}

export const updateOrdenes = async (idOrden, data) =>{
    const exist = await orden.findOne({_id: idOrden})
    if(!exist){
        const error = new Error(`Orden con ID ${idOrden} no existe`)
        error.statusCode = 404
        throw error
    }

    const result = await orden.findByIdAndUpdate({_id: idOrden}, data, {new: true})
    return {result}
}