import { Router } from 'express';
import { login, register, getUsers, getUserById } from '../controllers/userController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/', authMiddleware(['admin']), getUsers);
router.get('/:id', authMiddleware(['admin']), getUserById);

export default router;
