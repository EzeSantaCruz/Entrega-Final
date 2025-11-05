import productos from '../models/productosModels.js'
import movimientosStock from '../models/movimientoStockModel.js'

//establece un valor fijo
export const updateStockAbsolute = async (productoId, newStock, usuario) => {
    if (newStock === undefined || !Number.isInteger(newStock)) {
        const error = new Error('El campo "stock" debe ser un número válido')
        error.statusCode = 400
        throw error
    }
    if (newStock < 0) {
        const error = new Error('El stock no puede ser negativo')
        error.statusCode = 400
        throw error
    }

    const producto = await productos.findById(productoId)
    if (!producto) {
        const error = new Error(`Producto con ID ${productoId} no existe`)
        error.statusCode = 404
        throw error
    }

    const stockAnterior = producto.stock || 0
    if (stockAnterior === newStock) {
        return { message: 'El stock ya tenía ese valor', producto }
    }

    const resultado = await productos.findByIdAndUpdate({ _id: productoId }, { stock: newStock }, { new: true })

    const tipo = newStock > stockAnterior ? 'entrada' : 'salida'
    const cantidad = Math.abs(newStock - stockAnterior)

    const movimiento = new movimientosStock({
        producto: productoId,
        tipo,
        cantidad,
        usuario
    })
    await movimiento.save()

    return { resultado, movimiento }
}

//calcula el stock
export const adjustStockByStock = async (productoId, Stock, usuario) => {
    if (Stock === undefined || !Number.isInteger(Stock)) {
        const error = new Error('El campo "Stock" debe ser un número válido')
        error.statusCode = 400
        throw error
    }

    const producto = await productos.findById(productoId)
    if (!producto) {
        const error = new Error(`Producto con ID ${productoId} no existe`)
        error.statusCode = 404
        throw error
    }

    const stockAnterior = producto.stock || 0
    const nuevoStock = stockAnterior + Stock
    if (nuevoStock < 0) {
        const error = new Error('La operación dejaría stock negativo')
        error.statusCode = 400
        throw error
    }

    const resultado = await productos.findByIdAndUpdate({ _id: productoId }, { stock: nuevoStock }, { new: true })

    const tipo = Stock > 0 ? 'entrada' : 'salida'
    const cantidad = Math.abs(Stock)

    const movimiento = new movimientosStock({
        producto: productoId,
        tipo,
        cantidad,
        usuario
    })
    await movimiento.save()

    return { resultado, movimiento }
}
