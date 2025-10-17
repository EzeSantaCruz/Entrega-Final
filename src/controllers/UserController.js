import {crearUsuario, getUser} from '../services/userService.js'

export const getUserController = async (req, res) => {
    try{
        const response = await getUser()
        res.status(200).json(response)
    }catch(error)
    {
        if(error.statusCode === 204){
            return res.status(error.statusCode).json([])
        }
        return res.status(500).json({message: "Ocurrio un error, intentelo mas tarde", error: error.message})
    }
    
}

export const createUser = async (req, res) => {
    try{
        const response = await crearUsuario(req.body)
        res.status(201).json(response)
    }
    catch(error)
    {
        return res.status(500).json({message: "Ocurrio un error, intentelo mas tarde", error: error.message})
    }
}