import mongoose from 'mongoose'

const itemOrdenSchema = new mongoose.Schema({
    producto: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'productos',
        required: [true, "Producto obligatorio"] 
    },
    cantidad: { 
        type: Number, 
        required: [true, "Cantidad obligatorio"],
        min: [1, 'La cantidad debe ser al menos 1']
    },
    precioUnitario: { 
        type: Number, 
        required: [true, "Precio unitario obligatorio"],
        min: [0, 'El precio no puede ser negativo']
    },
    subtotal: { 
        type: Number,
        required: [true, "Subtotal obligatorio"]
    }
})

const ordenSchema = new mongoose.Schema({
    numeroOrden: {
        type: String,
        unique: true
    },
    fecha: {
        type: Date,
        default: Date.now
    },
    cliente: {
        nombre: { type: String, required: [true, "Nombre del cliente obligatorio"] },
        email: { type: String },
        telefono: { type: String }
    },
    items: [itemOrdenSchema],
    estado: {
        type: String,
        enum: ['pendiente', 'procesando', 'completada', 'cancelada'],
        default: 'pendiente'
    },
    total: {
        type: Number,
        required: [true, "Total obligatorio"]
    },
    metodoPago: {
        type: String,
        enum: ['efectivo', 'tarjeta', 'transferencia'],
        required: [true, "Metodo de pago obligatorio"]
    },
    notas: String,
    usuario: {
        type: String,
        required: [true, "Usuario obligatorio"]
    }
}, { 
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

ordenSchema.pre('save', async function(next) {
    if (this.isNew) {
        const date = new Date()
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const count = await mongoose.model('ordenes').countDocuments() + 1
        this.numeroOrden = `ORD-${year}${month}-${String(count).padStart(4, '0')}`
    }
    next()
})

ordenSchema.virtual('totalCalculado').get(function() {
    return this.items.reduce((total, item) => total + item.subtotal, 0)
})

// Middleware para validar total
ordenSchema.pre('save', function(next) {
    if (Math.abs(this.total - this.totalCalculado) > 0.01) {
        next(new Error('El total no coincide con la suma de subtotales'))
    }
    next()
})

export default mongoose.model('ordenes', ordenSchema)