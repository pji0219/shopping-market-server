import { Product } from './products';

type NewCart = Product & {
  userId: string;
};

type Cart = {
  userId: string;
  cart: Product[];
};

const carts: Cart[] = [];

export async function getCart(id: string): Promise<Product[] | undefined> {
  const found = carts.find(cart => cart.userId === id);
  return found?.cart;
}

export async function createCart(cart: NewCart) {
  const newCart: Cart = {
    userId: cart.userId,
    cart: [
      {
        category: cart.category,
        description: cart.description,
        title: cart.title,
        price: cart.price,
        quantity: cart.quantity,
        totalPrice: cart.totalPrice,
        options: cart.options,
        image: cart.image,
      },
    ],
  };

  const existingCart = {
    category: cart.category,
    description: cart.description,
    title: cart.title,
    price: cart.price,
    quantity: cart.quantity,
    totalPrice: cart.totalPrice,
    options: cart.options,
    image: cart.image,
  };

  const found = carts.find(cart => cart.userId === cart.userId);
  if (found) {
    found.cart.push(existingCart);
    return found.cart;
  }

  carts.push(newCart);
  return newCart.cart;
}
