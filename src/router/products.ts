import express from 'express';

import * as productController from '../controller/products';
import { upload } from '../middleware/multer';
import { isAuth } from '../middleware/auth';

const router = express.Router();

router.get('/', productController.getProducts);

router.post('/', isAuth, upload.single('image'), productController.postProduct);

export default router;
