import express from 'express';

import * as productController from '../controller/products';
import { upload } from '../middleware/multer';

const router = express.Router();

router.get('/', productController.getProducts);

router.post('/', upload.single('image'), productController.postProduct);

export default router;
