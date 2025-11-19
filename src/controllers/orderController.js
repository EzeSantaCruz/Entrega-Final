import { crearOrden, getOrdenes, deleteOrdenes, updateOrdenes, getOredenesById } from "../services/ordenServices.js";

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

export const getOrdenesController = async (req, res) => {
    try{
        const data = await getOrdenes()
        return res.status(200).json(data)
    }catch(error){
        if(error.statusCode === 404){
            return res.status(error.statusCode).json({message: error.message})
        }
        return res.status(500).json({error: "Ocurrio un error", message: error.message})
    }
}


export const deleteOrdenesController = async (req, res) =>{
    try{
        const id = req.params.id
        const exec = await deleteOrdenes(id)
        res.status(200).json(exec)
    }catch(error){
        if(error.statusCode === 404){
            return res.status(error.statusCode).json({message: error.message})
        }
        return res.status(500).json({error: "Ocurrio un error", message: error.message})
        }
}

export const updateOrdenesController = async (req, res) =>{
    try{
        const id = req.params.id
        const data = req.body
        const exec = await updateOrdenes(id, data)
        return res.status(200).json(exec)
    }catch(error){
        if(error.statusCode === 404){
            return res.status(error.statusCode).json({message: error.message})
        }
        return res.status(500).json({error: "Ocurrio un error", message: error.message})
    }
}


export const getOrdenesByIdController = async (req, res) => {
    try{
        const id = req.params.id
        const exec = await getOredenesById(id)
        return res.status(200).json(exec)
    }catch(error){
        if(error.statusCode === 404){
            return res.status(error.statusCode).json({message: error.message})
        }
        return res.status(500).json({error: "Ocurrio un error", message: error.message})
    }
}