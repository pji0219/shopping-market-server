"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.getAll = void 0;
let products = [
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
        description: '가슴 부분에 나일론 패널 및 스터드 디테일을 구성한 후드 코튼 스웻셔츠',
        id: '3',
        image: '',
        options: ['XS', 'S', 'M', 'L', 'XL'],
        price: '80000',
        title: '나일론 패널 & 스터드 디테일 코튼 스웻셔츠',
    },
];
function getAll() {
    return __awaiter(this, void 0, void 0, function* () {
        return products;
    });
}
exports.getAll = getAll;
function create(product) {
    return __awaiter(this, void 0, void 0, function* () {
        const newProduct = Object.assign(Object.assign({}, product), { id: Date.now().toString() });
        products = [newProduct, ...products];
        return newProduct;
    });
}
exports.create = create;
//# sourceMappingURL=products.js.map