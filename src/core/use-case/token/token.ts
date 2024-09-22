/* eslint-disable prettier/prettier */
import { DecodeRes, ITokenAdapter, TokenProps } from "src/libs/token/adapter"

import * as jwt from 'jsonwebtoken';
import { jwtDecode } from "jwt-decode"

export class TokenUseCase implements ITokenAdapter {

    signToken({ token, privateKey, expiresIn }: TokenProps): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            return jwt.sign(token, privateKey, { algorithm: 'HS256', ...(expiresIn ? {expiresIn: expiresIn} : {}) }, function (error: any, token: string ) {
                if (error) {
                    reject(error)
                }
                resolve(token)
            });
        })
    }

    verifyToken({ token, privateKey }: { token: string, privateKey: string }): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            return jwt.verify(token, privateKey, function (err:any, decoded: string ) {
                if (err) {
                    reject({
                        status: 401,
                        message:'token expired'
                    })
                }
                resolve(decoded)
            });
        })
    }

    decodeToken(token: string): DecodeRes {
        return jwtDecode(token)
    }

}