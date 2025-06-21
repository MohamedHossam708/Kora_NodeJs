import { Router } from 'express';
import { SignIn, SignUp } from './UserController.js';
import { hashPassword } from '../../middlewares/hashPassword.js';
import { CheckingHashedPassword } from '../../middlewares/CheckingHashedPassword.js';
import { FindUser } from '../../middlewares/FindUser.js';
import { validation } from '../../middlewares/Validiation.js';
import { userValidationSchema } from './ValidSchema.js';

const router = Router();


router.post('/signup',validation(userValidationSchema),hashPassword ,SignUp)
router.post('/signin',FindUser,CheckingHashedPassword, SignIn)


export default router;
