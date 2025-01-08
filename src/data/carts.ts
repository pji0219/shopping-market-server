import { NewProduct } from './products';

type Cart = {
  userId: string | undefined;
  cart: NewProduct[];
};

const carts: Cart[] = [];

export async function getById(
  id: string | undefined,
): Promise<NewProduct[] | undefined> {
  const found = carts.find(cart => cart.userId === id);
  return found?.cart;
}

export async function create(
  id: string | undefined,
  product: NewProduct,
): Promise<NewProduct | undefined> {
  // 장바구니에 아무것도 없던 사용자에 상품 담기
  const newCart: Cart = {
    userId: id,
    cart: [
      {
        id: product.id,
        category: product.category,
        description: product.description,
        title: product.title,
        price: product.price,
        quantity: product.quantity,
        totalPrice: product.totalPrice,
        options: product.options,
        image: product.image,
        createAt: product.createAt,
      },
    ],
  };

  // 기존에 장바구니 목록이 있던 사용자에 상품 담기
  const existingCart: NewProduct = {
    id: product.id,
    category: product.category,
    description: product.description,
    title: product.title,
    price: product.price,
    quantity: product.quantity,
    totalPrice: product.totalPrice,
    options: product.options,
    image: product.image,
    createAt: product.createAt,
  };

  const found = carts.find(cart => cart.userId === id);

  if (found) {
    const existing = found.cart.find(cart => cart.id === product.id);

    // 기존 방바구니에 같은 상품이 이미 있을 경우
    if (existing) {
      // 기존의 것 삭제후 새로운 데이터를 넣음 (수량 증가를 클라이언트에서 처리하기 땜에)
      found.cart.filter(cart => cart.id !== product.id);
    }

    found.cart.push(existingCart);
    return found.cart[found.cart.length - 1];
  }

  carts.push(newCart);
  return newCart.cart[newCart.cart.length - 1];
}
