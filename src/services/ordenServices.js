import orden from "../models/ordenModel.js";

export const crearOrden = async (data) =>{
    const nuevaOrden = new orden(data)
    const resultado = await nuevaOrden.save()
    return {resultado}
}


