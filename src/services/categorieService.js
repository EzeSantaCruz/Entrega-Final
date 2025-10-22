import categoria from "../models/categoriaModel.js";

export const crearCategoria = async (datos) => {
    const exist = await categoria.findOne({nombre: datos.nombre})
    if(exist){
        const error = new Error(`La categoria ${datos.nombre} ya existe`)
        error.statusCode = 409
        throw error
    }

    const nuevaCategoria = new categoria(datos)
    const categoriaCreada = await nuevaCategoria.save()
    return categoriaCreada

}