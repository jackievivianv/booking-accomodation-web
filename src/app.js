import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/auth.routes.js';
import Tarea from './models/tareas.model.js'
import mongoose from 'mongoose';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//create a task
app.post('/create', async (req, res) => {
    const task = await Tarea.create(req.body)
    
    return res.status(200).json(task)
})


// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(morgan('dev'));
app.use(express.json()); // For parsing application/json

// Routes
app.use('/api/auth', authRoutes);

// Catch-all route to serve index.html for any unknown routes (for SPA)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

main().catch(error => console.log(error))

async function main(){
    await mongoose.connect(process.env.MONGODB_URL)
}

export default app;


