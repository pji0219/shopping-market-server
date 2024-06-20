"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSignup = exports.validateCredential = void 0;
const express_validator_1 = require("express-validator");
const express_validator_2 = require("express-validator");
exports.validateCredential = [
    (0, express_validator_2.body)('username')
        .trim()
        .notEmpty()
        .isLength({ min: 5 })
        .withMessage('아이디는 최소 5글자 이상이어야 합니다.'),
    (0, express_validator_2.body)('password')
        .trim()
        .notEmpty()
        .isLength({ min: 5 })
        .withMessage('패스워드는 최소 5글자 이상이어야 합니다.'),
    validate,
];
exports.validateSignup = [
    ...exports.validateCredential,
    (0, express_validator_2.body)('name').trim().notEmpty().withMessage('이름이 비어 있습니다.'),
    (0, express_validator_2.body)('email')
        .isEmail()
        .normalizeEmail()
        .withMessage('이메일 형식이 아닙니다.'),
    validate,
];
function validate(req, res, next) {
    const errors = (0, express_validator_1.validationResult)(req);
    if (errors.isEmpty()) {
        return next();
    }
    else {
        return res.status(400).json({ message: errors.array()[0].msg });
    }
}
//# sourceMappingURL=validate.js.map