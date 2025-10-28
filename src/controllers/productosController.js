import { crearProducto, getProductos, getProductoId, deleteProduct } from "../services/productoService.js";

export const crearProductoController = async (req, res) => {
    try{
        const data = req.body
        console.log(data)
        const exec = await crearProducto(data)
        res.status(200).json(exec)
    }catch(error){
        if(error.statusCode === 404){
            return res.status(error.statusCode).json({message: error.message})
        }
        return res.status(500).json({error: "Ocurrio un error", message: error.message})
    }
}


export const getProductosController = async (req, res) => {
    try{
        const data = await getProductos()
        return res.status(200).json(data)
    }catch(error)
    {
        if(error.statusCode === 204){
            return res.status(error.statusCode).json({message: error.message})
        }
        return res.status(500).json({error: "Ocurrio un error", message: error.message})
    }
}

export const getProductoIdController = async (req, res) =>{
    try{
        const id= req.params.id
        const product = await getProductoId(id)
        return res.status(200).json(product)
    }catch(error)
    {
        if(error.statusCode === 204){
            return res.status(error.statusCode).json({message: error.message})
        }
        return res.status(500).json({error: "Ocurrio un error", message: error.message})
    }
}

export const deleteProductController = async (req, res) => {
    try{
        const id= req.params.id
        const product = await deleteProduct(id)
        return res.status(200).json(product)
    }catch(error)
    {
        if(error.statusCode === 204){
            return res.status(error.statusCode).json({message: error.message})
        }
        return res.status(500).json({error: "Ocurrio un error", message: error.message})
    }
}