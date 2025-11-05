import {crearUsuario, getUser, getUserById, deleteUser, login} from '../services/userService.js'

export const LoginController = async (req, res) => {
    try{
        const data = req.body
        const exec = await login(data)
        return res.status(200).json(exec)
    }catch(error){
        if(error.statusCode === 404){
            return res.status(error.statusCode).json(error.message)
        }
        return res.status(500).json({message: "Ocurrio un error, intentelo mas tarde", error: error.message})
    }
}

export const getUserController = async (req, res) => {
    try{
        const response = await getUser()
        res.status(200).json(response)
    }catch(error)
    {
        if(error.statusCode === 404){
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

export const getUserByIdController = async (req,res) =>{
    try{
        if(!req.params.id){
            res.status(400).json({message:"Id no proporcionado, por favor ingrese un id"})
        }

        const userId = req.params.id
        const user = await getUserById(userId)
        return res.status(200).json(user)
    }catch(error){
        if(error.statusCode === 404){
            return res.status(error.statusCode).json([])
        }
        return res.status(500).json({message: "Ocurrio un error, intentelo mas tarde", error: error.message})
    }
}


export const deleteUserController = async (req, res) => {
    try{
        if(!req.params.id){
            res.status(400).json({message:"Id no proporcionado, por favor ingrese un id"})
        }
        const userId = req.params.id
        const userDelete = await deleteUser(userId)
        return res.status(200).json(userDelete)
    }catch(error)
    {
        if(error.statusCode === 404){
            return res.status(error.statusCode).json([])
        }
        return res.status(500).json({message:"Id no proporcionado, por favor ingrese un id"})
    }
}
