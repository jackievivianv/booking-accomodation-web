import { register, login } from '../controllers/auth.controller.js';
import { Router } from 'express';

const router = Router();


router.post('/api/auth/register', register);
router.post('/api/auth/login', login);

export default router;




