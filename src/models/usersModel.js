import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require: [true, "Debe completar el Nombre"],
        minLength: 3,
        maxLength: 20,
        lowercase: true,
        trim:true
    },
    apellido:{
        type:String,
        require: [true, "Debe completar el Apellido"],
        minLength: 3,
        maxLength: 20,
        lowercase: true,
        trim: true
    },
    emial:{
        type:String,
        require:[true, "Complete Email, por favor"],
        maxLength: 50,
        trim: true,
        lowercase: true,
        match: /^\S+@\S+\.\S+$/,
        unique:true
    }
}, {timestamps:true})

export default mongoose.model("usuario", userSchema)