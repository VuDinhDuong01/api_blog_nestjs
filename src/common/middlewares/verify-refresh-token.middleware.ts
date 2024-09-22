/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { SecretAdapter } from 'src/libs/secret/adapter';
import { ITokenAdapter } from 'src/libs/token/adapter';
import { UNAUTHORIZEDException } from '../../utils/base-exception';

@Injectable()
export class VerifyRefreshTokenMiddleware implements NestMiddleware {
  constructor(private readonly tokenService: ITokenAdapter, private readonly SecretService: SecretAdapter) { }
  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.body.token
    try {
     const verifyToken=  await this.tokenService.verifyToken({ token, privateKey: this.SecretService.KEY_REFRESH_TOKEN })
     req.decode_token = verifyToken
      next()
    } catch (error: any) {
      if (error.status === 401 && error.message === 'token expired') {
        throw new UNAUTHORIZEDException('Token đã hết hạn')
      }
    }
  }
}
