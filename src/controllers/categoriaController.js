import { crearCategoria, getCategorias, deleteCat, updateCategoria } from "../services/categorieService.js";

export const crearCategoriaController = async (req, res) => {
    try{
        const datos = req.body
        const exec = await crearCategoria(datos)
        return res.status(200).json({message: "Categoria Creada con exito", data : exec})
    }catch(error)
    {
        if(error.statusCode === 409){
            return res.status(error.statusCode).json({message: error.message})
        }
        return res.status(500).json({error: "Ocurrio un error", message : error.message})
    }
}


export const getCategoriasController = async (req, res) =>{
    try{
        const cat = await getCategorias()
        res.status(200).json({data: cat})
    }catch(error)
    {
        if(error.statusCode === 204){
            return res.status(error.statusCode).json({message: error.message})
        }
        return res.status(500).json({error: "Ocurrio un error", message : error.message})
    }
}

export const deleteCatController = async (req, res) => {
    try{
        const idCat= req.params.id
        const catDelete = await deleteCat(idCat)
        res.status(200).json({message: catDelete})
    }catch(error){
        if(error.statusCode === 404){
            return res.status(error.statusCode).json({message: error.message})
        }
        return res.status(500).json({error: "Ocurrio un error", message: error.message})
    }
}


export const updateCategoriaController = async (req,res) => {
    try{
        const idCat = req.params.id
        const data = req.body
        const update = await updateCategoria(idCat, data)
        return res.status(200).json({message: update})
    }
    catch(error)
    {
        if(error.statusCode === 404){
            return res.status(error.statusCode).json({message: error.message})
        }
        return res.status(500).json({error: "Ocurrio un error", message: error.message})
    }
}