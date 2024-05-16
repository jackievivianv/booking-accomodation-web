import mongoose from 'mongoose'

//const mongoose = require("mongoose")

const { MONGODB_URL } = process.env

// conecta mongoose con la direccion de la base de datos, el nombre es merndb (mongo crea una base de datos apenas creo un dato)
// esto es asincrono, entonces por eso la conexión con mongoose va dentro de una función
// la eporto porque voy a utilizarlaen otras partes. Pero este código puede funcionar o no, entonces necesito el try and catch


export const connectDB = () => {
    
    mongoose.connect(MONGODB_URL, {})
        .then(
            console.log('>>>DB connected succesfully')
        )
        .catch ((error) => {
            console.log('DB connection FAILED');
            console.log(error);
            process.exit(1)
        })
}


