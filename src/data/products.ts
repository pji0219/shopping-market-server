// todo: 추후에 mongo db로 변경 필요
export type Product = {
  title: string;
  price: string;
  quantity: string;
  totalPrice: string;
  option: string;
  imageUrl: string;
};

type NewProduct = Product & {
  id: string;
  createAt: string;
};

let products: NewProduct[] = [];

export async function create(product: Product): Promise<NewProduct> {
  const newProduct: NewProduct = {
    ...product,
    id: Date.now().toString(),
    createAt: new Date().toDateString(),
  };

  products = [newProduct, ...products];
  return newProduct;
}
