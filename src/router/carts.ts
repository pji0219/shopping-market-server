import express from 'express';

import * as cartController from '../controller/carts';
import { isAuth } from '../middleware/auth';

const router = express.Router();

router.get('/carts', isAuth, cartController.getCart);

router.post('cart', isAuth, cartController.postCart);

export default router;
