import { Request, Response } from 'express';

import * as productRepogitory from '../data/products';

export async function getProducts(req: Request, res: Response): Promise<void> {
  const products = await productRepogitory.getAll();

  res.status(200).json(products);
}

export async function postProduct(req: Request, res: Response): Promise<void> {
  if (req.file && req.body) {
    const product: productRepogitory.Product = {
      ...req.body,
      imageUrl: `../uploads/${req.file.filename}`,
    };
    const newProduct = await productRepogitory.create(product);

    res.status(201).json(newProduct);
  } else {
    res.status(400).json({ message: 'Product and image are required' });
  }
}
