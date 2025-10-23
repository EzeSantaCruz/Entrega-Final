import usuario from '../models/usersModel.js'

export const getUser = async () =>{
    const usuarioExistentes = await usuario.find()

    if(usuarioExistentes.length === 0){
        const error = new Error("No hay usuarios existentes")
        error.statusCode = 204
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
        error.statusCode = 204
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