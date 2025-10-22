import mongoose from "mongoose";


const categoriasSchema =  new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowecase: true,
        maxLength: 30,
        minLength:2
    },
    descripcion: {
        type: String,
        required: false,
        trim: true
    }
}, {timestamps:true})

export default mongoose.model("categorias", categoriasSchema)