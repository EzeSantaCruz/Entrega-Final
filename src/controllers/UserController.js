import {crearUsuario} from '../services/userService.js'

export const createUser = async (req, res) => {
    try{
        const response = await crearUsuario(req.body)
        res.status(201).json(response)
    }
    catch(error)
    {
        return res.status(500).json({message: "Ocurrio un error intentelo mas tarde", error: error.message})
    }
}