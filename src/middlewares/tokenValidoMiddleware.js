import { tokenValido } from "../utils/tokenVerify.js";



export const tokenValidoMiddleware = (req, res, next) => {
    try{
        const header = req.headers.authorization
        if(!header){
            res.status(401).json({message: "No se proporcionó token de acceso"})
        }

        if(!header.startsWith('Bearer ')){
            return res.status(401).json({ message: "Formato de token inválido" });
        }

        const token = header.split(' ')[1]

        const validator = tokenValido(token)

        req.user = validator
        next()
    }catch(error){
        return res.status(400).json({message: "Token de acceso invalido", error: error.message})
    }
}