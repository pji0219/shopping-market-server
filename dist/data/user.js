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
exports.createUser = exports.findByUsername = exports.findById = void 0;
const users = [
    {
        id: '1',
        username: 'pji',
        password: '$2b$12$gyCiSouorUkKhHGtkvBmDeHnDvfyHXN9v7KaG4V4rH4kfnLc7UIJ6',
        name: 'pji',
        email: 'pji@email.com',
    },
];
function findById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return users.find(user => user.id === id);
    });
}
exports.findById = findById;
function findByUsername(username) {
    return __awaiter(this, void 0, void 0, function* () {
        return users.find(user => user.username === username);
    });
}
exports.findByUsername = findByUsername;
function createUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const newUser = Object.assign(Object.assign({}, user), { id: Date.now().toString() });
        users.push(newUser);
        return newUser.id;
    });
}
exports.createUser = createUser;
//# sourceMappingURL=user.js.map