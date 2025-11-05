import usuario from '../models/usersModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { SECRET, EXPIRED } from '../../config.js'
export const login = async (data) =>{
    if(!data.email && !data.password){
        const error = new Error("Complete los campos 'Usuario' y 'Password'")
        error.statusCode = 404
        throw error
    }
    
    const userExists = await usuario.findOne({email: data.email})
    if(!userExists)
        {
            const error = new Error("Usuario o Password incorrecto, por favor intentelo nuevamente")
            error.statusCode = 404
            throw error
        }
    
        const PasswordBd = userExists.password
        if(!bcrypt.compareSync(data.password, PasswordBd)){
            const error = new Error("Usuario o Password incorrecto, por favor intentelo nuevamente")
            error.statusCode = 400;
            throw error
        }
        
        const datosToken = {
            id: userExists._id,
            email: userExists.email
        }

        const token = jwt.sign(datosToken, SECRET, {expiresIn: EXPIRED})

        return {Login: "True", message: "Inicio sesion correctamente", token_de_usuario: token}
}

export const getUser = async () =>{
    const usuarioExistentes = await usuario.find()

    if(usuarioExistentes.length === 0){
        const error = new Error("No hay usuarios existentes")
        error.statusCode = 404
        throw error
    }

    return usuarioExistentes
}

export const crearUsuario = async (data) =>{

    const userExists = await usuario.findOne({email:data.email})

    if(userExists)
        {
            throw new Error("Usuario ya existe")
        }

    const nuevoUsuario = new usuario(data)

    await nuevoUsuario.save()

    return { message: "Usuario creado correctamente", usuario: nuevoUsuario }
}


export const getUserById = async (idUser) => {
    const user = await usuario.findById({_id: idUser})

    if(!user){
        const error = new Error(`USUARIO CON ID ${idUser} NO EXISTE`)
        error.statusCode = 404
        throw error
    }
    return user
}

export const deleteUser = async (idUser) => {
    const userExists = await usuario.findById({_id: idUser})
    if(!userExists)
    {
        const error = new Error("Usuario no existe")
        error.statusCode = 404
        throw error
    }

    await usuario.findByIdAndDelete({_id: idUser})

    return {message: "USUARIO ELIMINADO CORRECTAMENTE"}

}