import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { body } from 'express-validator';

export const validateCredential = [
  body('username')
    .trim()
    .notEmpty()
    .isLength({ min: 5 })
    .withMessage('아이디는 최소 5글자 이상이어야 합니다.'),
  body('password')
    .trim()
    .notEmpty()
    .isLength({ min: 5 })
    .withMessage('패스워드는 최소 5글자 이상이어야 합니다.'),
  validate,
];

export const validateSignup = [
  ...validateCredential,
  body('name').trim().notEmpty().withMessage('이름이 비어 있습니다.'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('이메일 형식이 아닙니다.'),
  validate,
];

function validate(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  } else {
    return res.status(400).json({ message: errors.array()[0].msg });
  }
}
