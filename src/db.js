import mongoose from 'mongoose'

const MONGODB_URL = process.env

// conecta mongoose con la direccion de la base de datos, el nombre es merndb (mongo crea una base de datos apenas creo un dato)
// esto es asincrono, entonces por eso la conexión con mongoose va dentro de una función
// la eporto porque voy a utilizarlaen otras partes. Pero este código puede funcionar o no, entonces necesito el try and catch

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URL, {});
        useNewUrlParser: true;
        useUnifiedTopology: true
        console.log(">>> DB is connected")
    } catch (error) {
        console.log(error);
        process.exit(1)
    } 
}


