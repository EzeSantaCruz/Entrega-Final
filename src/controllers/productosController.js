import { crearProducto } from "../services/productoService.js";

export const crearProductoController = async (req, res) => {
    try{
        const data = req.body
        const exec = await crearProducto(data)
        res.status(200).json(data)
    }catch(error){
        if(error.statusCode === 404){
            return res.status(error.statusCode).json({message: error.message})
        }
        return res.status(500).json({error: "Ocurrio un error", message: error.message})
    }
}