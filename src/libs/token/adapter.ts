import { Secret, JwtPayload } from 'jsonwebtoken'
export interface TokenProps{
    token: JwtPayload
    privateKey: Secret
    expiresIn?:string 
}

export abstract class ITokenAdapter {
    abstract signToken({token, privateKey,expiresIn}:TokenProps): Promise<string>
    abstract verifyToken({token, privateKey}:{token: string , privateKey: string }): Promise<string>
    abstract decodeToken(token: string ): string
}