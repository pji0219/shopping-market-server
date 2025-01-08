import { Request, Response } from 'express';

import * as cartRepogitory from '../data/carts';
import { NewProduct } from '../data/products';

interface CartReq extends Request {
  body: NewProduct;
}

export async function getCart(req: Request, res: Response): Promise<void> {
  const cart = cartRepogitory.getById(req.userId);

  res.status(200).json(cart);
}

export async function postCart(req: CartReq, res: Response): Promise<void> {
  try {
    const newCart = cartRepogitory.create(req.userId, req.body);
    res.status(201).json(newCart);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
}
