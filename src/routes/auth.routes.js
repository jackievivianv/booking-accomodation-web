

import { register, login } from '../controllers/auth.controller.js';
import {Router} from 'express'

const router = Router();


//llamo a las funciones que puse en controllers register y login. 
router.post('/register', register);
router.post('/login', login);

export default router;



