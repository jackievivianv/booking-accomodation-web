
//require('dotenv').config()
//require("./src/db").connect()
import express from 'express';
import morgan from 'morgan';

//const express = require('express')
const app = express();


// app quiero que utilices el modulo morgan con su configuración dev
app.use(morgan('dev'));

export default app;