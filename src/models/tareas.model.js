import mongoose from "mongoose";

const tareasSchema = new mongoose.Schema({
    task:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
})

export default mongoose.model('Tarea', tareasSchema)