import { Router } from 'express';
import { SignUp } from './UserController.js';

const router = Router();


router.post('/signup', SignUp)


export default router;
