// todo: 추후에 mongo db로 변경 필요
export type Product = {
  id: string;
  title: string;
  price: string;
  quantity: string;
  totalPrice: string;
  option: string;
  imageUrl: string;
  createAt: string;
};

let products: Product[] = [];

async function create(product: Product): Promise<Product> {
  const newProduct = {
    ...product,
    id: Date.now().toString(),
    createAt: new Date().toDateString(),
  };

  products = [newProduct, ...products];
  return newProduct;
}
