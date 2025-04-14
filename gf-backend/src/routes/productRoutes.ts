import { Router } from 'express';
import { createProduct, getAllProducts, updateProduct, deleteProduct } from '../controllers/productController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', authMiddleware(), getAllProducts);
router.post('/', authMiddleware(['admin']), createProduct);
router.put('/:id', authMiddleware(['admin']), updateProduct);
router.patch('/:id', authMiddleware(['admin']), updateProduct);
router.delete('/:id', authMiddleware(['admin']), deleteProduct);

export default router;
