import { crearCategoria, getCategorias } from "../services/categorieService.js";

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
    }
}