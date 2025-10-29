import mongoose from 'mongoose'

const movimientoStockSchema = new mongoose.Schema({
    producto: { type: mongoose.Schema.Types.ObjectId,
        ref: 'productos',
        required: true 
    },
    tipo: { type: String,
        enum: ['entrada', 'salida'],
        required: true
    },
    cantidad: { type: Number, required: true },
    fecha: { type: Date, default: Date.now },
    usuario: { type: String }
}, { timestamps: true })

export default mongoose.model('movimientosStock', movimientoStockSchema)
