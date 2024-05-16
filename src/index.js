import app from './app.js'
import { connectDB } from './db.js'



connectDB();
// quiero que escuche y se ejecture desde el puerto 3000
app.listen(3000)
console.log('Server on port', 3000)