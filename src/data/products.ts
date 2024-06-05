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

let products: NewProduct[] = [
  {
    title: '맥북',
    price: '200',
    quantity: '1',
    totalPrice: '200',
    option: '15인치',
    imageUrl: 'none',
    id: '1',
    createAt: new Date().toString(),
  },
  {
    title: '아이폰',
    price: '100',
    quantity: '1',
    totalPrice: '100',
    option: '프로',
    imageUrl: 'none',
    id: '2',
    createAt: new Date().toString(),
  },
];

export async function getAll(): Promise<NewProduct[]> {
  return products;
}

export async function create(product: Product): Promise<NewProduct> {
  const newProduct: NewProduct = {
    ...product,
    id: Date.now().toString(),
    createAt: new Date().toDateString(),
  };

  products = [newProduct, ...products];
  return newProduct;
}
