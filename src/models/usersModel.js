import mongoose from 'mongoose'
import { isGoodPassword } from '../utils/validaores.js'
import bcrypt from 'bcrypt'

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
    email:{
        type:String,
        require:[true, "Complete Email, por favor"],
        maxLength: 50,
        trim: true,
        lowercase: true,
        match: /^\S+@\S+\.\S+$/,
        unique:true
    },
    password: {
        required: [ true, "La password no debe estar vacia" ],
        type: String,
        validate: {
            validator: function (v){
                return isGoodPassword(v)
            },
            message: "Password no valida, falta algun requerimiento"
        }
    }
}, {timeStamps:true})


userSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, 10)
    next()
})

export default mongoose.model("usuarios", userSchema)