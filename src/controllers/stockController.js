import { updateStockAbsolute, adjustStockByStock } from '../services/stockService.js'

export const updateStockController = async (req, res) => {
    try{
        const id = req.params.id
        const { stock, usuario } = req.body
        const exec = await updateStockAbsolute(id, stock, usuario)
        return res.status(200).json({ message: 'Stock actualizado correctamente', data: exec })
    }catch(error){
        if(error.statusCode){
            return res.status(error.statusCode).json({ error: true, message: error.message })
        }
        return res.status(500).json({ error: true, message: error.message || 'Error al actualizar stock' })
    }
}

export const adjustStockController = async (req, res) => {
    try{
        const id = req.params.id
        const { Stock, usuario } = req.body
        const exec = await adjustStockByStock(id, Stock, usuario)
        return res.status(200).json({ message: 'Movimiento registrado correctamente', data: exec })
    }catch(error){
        if(error.statusCode){
            return res.status(error.statusCode).json({ error: true, message: error.message })
        }
        return res.status(500).json({ error: true, message: error.message || 'Error al ajustar stock' })
    }
}
