import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { config } from '../config.js';
import createDebug from 'debug';
import { HTTPError } from '../errors/errors.js';

const debug = createDebug('REFORMA:services:auth');

export interface PayloadToken extends jwt.JwtPayload {
  id: string;
  email: string;
}

const salt = 10;

export class Auth {
  static createJWT(payload: PayloadToken) {
    return jwt.sign(payload, config.JWT_SECRET as string);
  }

  static verifyJWTPayload(token: string) {
    const result = jwt.verify(token, config.JWT_SECRET as string);
    if (typeof result === 'string')
      throw new HTTPError(498, 'Invalid token', `Invalid token: ${result}`);
    return result as PayloadToken;
  }

  static hash(value: string) {
    return bcrypt.hash(value, salt);
  }

  static compare(value: string, hash: string) {
    return bcrypt.compare(value, hash);
  }
}
