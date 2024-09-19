import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import * as userRepository from '../data/user';

export const jwtSecretKey = '~-;7siLCRLN£6pVz>5*G;6@u&]1XdS=l';
const jwtExpiresInDays = '2d';
const bcryptSaltRounds = 12;
const INVALID = '유효하지 않은 아이디 또는 비밀번호 입니다.';

interface SignRequest extends Request {
  body: {
    username: string;
    password: string;
    name: string;
    email: string;
  };
}

interface LoginRequest extends Request {
  body: {
    username: string;
    password: string;
  };
}

export async function signup(req: SignRequest, res: Response) {
  const { username, password, name, email } = req.body;

  const found = await userRepository.findByUsername(username);
  if (found) {
    return res.status(409).json({ message: '이미 존재하는 아이디 입니다.' });
  }

  const hashed = await bcrypt.hash(password, bcryptSaltRounds);
  const userId = await userRepository.createUser({
    username,
    password: hashed,
    name,
    email,
  });

  const token = createJwtToken(userId);
  res.status(201).json({ token, username });
}

export async function login(req: LoginRequest, res: Response) {
  const { username, password } = req.body;

  const user = await userRepository.findByUsername(username);
  if (!user) {
    return res.status(401).json({ message: INVALID });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(401).json({ message: INVALID });
  }

  const token = createJwtToken(user.id);
  res.status(200).json({ token, username });
}

function createJwtToken(id: string): string {
  return jwt.sign({ id }, jwtSecretKey, {
    expiresIn: jwtExpiresInDays,
  });
}
