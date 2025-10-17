import usuario from '../models/usersModel.js'

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