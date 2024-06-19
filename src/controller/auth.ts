import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import * as userRepository from '../data/user';

export const jwtSecretKey = '~-;7siLCRLN£6pVz>5*G;6@u&]1XdS=l';
const jwtExpiresInDays = '2d';
const bcryptSaltRounds = 12;

export async function signup(req: Request, res: Response) {
  const { username, password, name, email } = req.body;
  const found = await userRepository.findByUsername(username);
}
