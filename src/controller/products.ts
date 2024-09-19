import { Request, Response } from 'express';

import * as productRepogitory from '../data/products';

interface ProductReq extends Request {
  body: {
    category: string;
    description: string;
    title: string;
    price: string;
    quantity: string;
    totalPrice: string;
    options: string[];
  };
}

export async function getProducts(req: Request, res: Response): Promise<void> {
  const products = await productRepogitory.getAll();

  res.status(200).json(products);
}

export async function postProduct(req: ProductReq, res: Response) {
  if (req.file && req.body) {
    const product: productRepogitory.Product = {
      ...req.body,
      image: `../uploads/${req.file.filename}`,
    };
    const newProduct = await productRepogitory.create(product);

    return res.status(201).json(newProduct);
  } else {
    return res.status(400).json({ message: 'Product and image are required' });
  }
}
