/* eslint-disable prettier/prettier */
import { ITokenAdapter, TokenProps } from "src/libs/token/adapter"

import * as jwt from 'jsonwebtoken';
import { jwtDecode } from "jwt-decode"

export class TokenUseCase implements ITokenAdapter {

    signToken({ token, privateKey, expiresIn }: TokenProps): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            return jwt.sign(token, privateKey, { algorithm: 'HS256', expiresIn }, function (error: any, token: string ) {
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
                    reject(err)
                }
                resolve(decoded)
            });
        })
    }

    decodeToken(token: string): string {
        return jwtDecode(token)
    }

}