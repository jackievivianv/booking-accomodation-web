
//require('dotenv').config()
//require("./src/db").connect()
import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js'

//const express = require('express')
const app = express();


// app quiero que utilices el modulo morgan con su configuración dev
app.use(morgan('dev'));
//aplicación quiero que utilices el authRoutes
app.use('/api/auth', authRoutes);

export default app;

