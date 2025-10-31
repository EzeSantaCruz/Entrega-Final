import { crearOrden } from "../services/ordenServices.js";

export const crearOrdenController = async (req, res) =>{
    try{
        const data = req.body
        const result = await crearOrden(data)
        return res.status(200).json(result)
    }catch(error){
        console.log(error)
        return res.status(500).json({error: "Ocurrio un error"})
    }
}
