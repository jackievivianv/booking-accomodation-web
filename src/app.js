import express from 'express';
import morgan from 'morgan';


const app = express();


// app quiero que utilices el modulo morgan con su configuración dev
app.use(morgan('dev'));

export default app;