import jwt from 'jsonwebtoken'
import { SECRET } from '../../config.js'

export function tokenValido(token){
    try{
        const TK = jwt.verify(token, SECRET)
        return TK
    }catch(error){
        throw new Error("Token invalido")
    }
}