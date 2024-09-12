import jwt from 'jsonwebtoken';
import { Response, Request, NextFunction } from 'express';

import { jwtSecretKey } from '../controller/auth';
import * as userRepository from '../data/user';

const AUTH_ERROR = { message: 'Authentication Error' };

export async function isAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.get('Authorization');

  if (!(authHeader && authHeader.startsWith('Bearer '))) {
    return res.status(401).json(AUTH_ERROR);
  }

  const token = authHeader.split('')[1];

  jwt.verify(token, jwtSecretKey, async (error, decoded) => {
    if (error) {
      return res.status(401).json(AUTH_ERROR);
    }

    const user = await userRepository.findById(decoded.id);
    if (!user) {
      return res.status(401).json(AUTH_ERROR);
    }
    req.userId = user.id; // req.customData, 다른 미들웨어에서 계속해서 접근해야 되는 데이터라면 커스텀 데이터를 등록해줄 수 있다.
    req.token = token; // 다음 미들웨어에 토큰 전달하기 위해서
    next();
  });
}
