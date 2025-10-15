import usuario from '../models/usersModel.js'

export const crearUsuario = async (data) =>{

    const userExists = await usuario.findOne({emial:data.emial})

    if(userExists)
        {
            throw new Error("Usuario ya existe")
        }

    const nuevoUsuario = new usuario(data)

    await nuevoUsuario.save()

    return { message: "Usuario creado correctamente", usuario: nuevoUsuario }
}