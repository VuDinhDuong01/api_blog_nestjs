/* eslint-disable prettier/prettier */
import { Secret, JwtPayload } from 'jsonwebtoken'
export interface TokenProps{
    token: JwtPayload
    privateKey: Secret
    expiresIn?:string 
}

export interface DecodeRes{
    exp: number, 
    iat: number,
    id: string 
    role: string 
}
export abstract class ITokenAdapter {
    abstract signToken({token, privateKey,expiresIn}:TokenProps): Promise<string>
    abstract verifyToken({token, privateKey}:{token: string , privateKey: string }): Promise<string>
    abstract decodeToken(token: string ): DecodeRes
}