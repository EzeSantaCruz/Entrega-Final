import productos from "../models/productosModels.js"

export const crearProducto = async (data)  => {
    const exist = await productos.findOne({nombre: data.nombre})
    if(exist){
        const error = new Error(`El producto ${data.nombre} ya existe`)
        error.statusCode = 409
        throw error
    }

    const productoNuevo = new productos(data)
    await productoNuevo.save()
    return {productoNuevo}
}

export const getProductos = async () => {
    const data = await productos.find()
    if(data.length === 0){
        const error = new Error("No hay productos")
        error.statusCode = 204
        throw error
    }

    return data
}

export const getProductoId = async (idPorduct) => {
    const producto = await productos.findById({_id: idPorduct})
    if(!producto){
        const error = new Error(`Producto con ID ${idPorduct} no existe`)
        error.statusCode = 204
        throw error
    }

    return {producto}
}

export const deleteProduct = async (idPorduct) => {
    const exist = await productos.findById({_id: idPorduct})
    if(!exist){
        const error = new Error(`Producto con ID ${idPorduct} no existe`)
        error.statusCode = 204
        throw error
    }

    await productos.findByIdAndDelete(idPorduct)

    return {message: "CATEGORIA ELIMINADA CORRECTAMENTE"}
}