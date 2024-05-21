import mongoose from "mongoose";


//esto es paea decirle lo que va a guardar

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
})

//esto es para interectuar con la base de datos
export default mongoose.model('User', userSchema)