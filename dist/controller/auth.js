"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signup = exports.jwtSecretKey = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userRepository = __importStar(require("../data/user"));
exports.jwtSecretKey = '~-;7siLCRLN£6pVz>5*G;6@u&]1XdS=l';
const jwtExpiresInDays = '2d';
const bcryptSaltRounds = 12;
const INVALID = '유효하지 않은 아이디 또는 비밀번호 입니다.';
function signup(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { username, password, name, email } = req.body;
        const found = yield userRepository.findByUsername(username);
        if (found) {
            return res.status(409).json({ message: '이미 존재하는 아이디 입니다.' });
        }
        const hashed = yield bcrypt_1.default.hash(password, bcryptSaltRounds);
        const userId = yield userRepository.createUser({
            username,
            password: hashed,
            name,
            email,
        });
        const token = createJwtToken(userId);
        res.status(201).json({ token, username });
    });
}
exports.signup = signup;
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { username, password } = req.body;
        const user = yield userRepository.findByUsername(username);
        if (!user) {
            return res.status(401).json({ message: INVALID });
        }
        const isValidPassword = yield bcrypt_1.default.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ message: INVALID });
        }
        const token = createJwtToken(user.id);
        res.status(200).json({ token, username });
    });
}
exports.login = login;
function createJwtToken(id) {
    return jsonwebtoken_1.default.sign({ id }, exports.jwtSecretKey, {
        expiresIn: jwtExpiresInDays,
    });
}
//# sourceMappingURL=auth.js.map