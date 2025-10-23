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


export const getCategorias = async () => {
    const cat = await categoria.find()
    if(cat.length === 0){
        const error = new Error("No hay categorias existentes")
        error.statusCode = 204
        throw error
    }

    return cat
}

export const deleteCat = async (idCat) => {
    const catExists = await categoria.findById(idCat)

    if(!catExists)
    {
        const error = new Error("Categoria no encontrada")
        error.statusCode = 404
        throw error
    }

    await categoria.findByIdAndDelete(idCat)
    return {message: "CATEGORIA ELIMINADA CORRECTAMENTE"}

}