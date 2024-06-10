// todo: 추후에 mongo db로 변경 필요
export type Product = {
  category: string;
  description: string;
  title: string;
  price: string;
  // quantity: string;
  // totalPrice: string;
  options: string[];
  image: string;
};

type NewProduct = Product & {
  id: string;
  // createAt: Date;
};

let products: NewProduct[] = [
  {
    category: '전자제품',
    description: '우왕굳',
    title: '맥북',
    price: '200',
    // quantity: '1',
    // totalPrice: '200',
    options: ['15인치', '13인치'],
    image: '',
    id: '1',
    // createAt: new Date(),
  },
  {
    category: '전자제품',
    description: '우왕굳',
    title: '아이폰',
    price: '100',
    // quantity: '1',
    // totalPrice: '100',
    options: ['프로', '프로맥스'],
    image: '',
    id: '2',
    // createAt: new Date(),
  },
  {
    category: '남성',
    description:
      '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
    id: '3',
    image: '',
    options: ['XS', 'S', 'M', 'L', 'XL'],
    price: '80000',
    title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
  },
];

export async function getAll(): Promise<NewProduct[]> {
  return products;
}

export async function create(product: Product): Promise<NewProduct> {
  const newProduct: NewProduct = {
    ...product,
    id: Date.now().toString(),
    // createAt: new Date(),
  };

  products = [newProduct, ...products];
  return newProduct;
}
