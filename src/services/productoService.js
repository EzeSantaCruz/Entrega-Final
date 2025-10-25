import productos from "../models/productosModels.js"

export const crearProducto = async (data)  => {
    const exist = await productos.findOne({nombre: data.nombre})
    if(exist){
        const error = new Error(`El producto ${datos.nombre} ya existe`)
        error.statusCode = 409
        throw error
    }

    const productoNuevo = new productos(data)
    await productoNuevo.save()
    return {productoNuevo}
}