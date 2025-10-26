import mongoose from 'mongoose'


const productoSchema = new mongoose.Schema({
    nombre:{
            type: String,
            unique: true,
            lowercase: true,
            trim: true,
            maxLength: 35,
            require: [true, "Ingrese el Nombre pro favor"]
    },
    descripcion: {
        type: String,
        minLength: 1,
        maxLength: 100
    },
    categoria: {type: mongoose.Schema.Types.ObjectId, ref: "categorias"},
    precio: {
        type: Number,
        required: [ true, "Ingrese el precio por favor" ],
        min: [1, "Precio no valido"]
    },
    stock: {
        type: Number,
        required: [ true, "Ingrese numero de stock valido" ],
        min: [1, "Precio no valido"]
    }
}, {timestamps: true})

export default mongoose.model("productos", productoSchema)