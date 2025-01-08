import express from 'express';

import * as cartController from '../controller/carts';

const router = express.Router();

router.get('/carts', cartController.getCart);

router.post('cart', cartController.postCart);

export default router;
