/* eslint-disable prettier/prettier */

import { SecretAdapter } from "src/libs/secret/adapter";
import { ITokenAdapter } from "src/libs/token/adapter";
import { IRefreshTokenAdapter } from "src/modules/auth/adapter";


export class RefreshTokenUseCase implements IRefreshTokenAdapter {
    constructor(private readonly secretService: SecretAdapter, private readonly tokenService: ITokenAdapter) { }
    async execute({ token }: { token: string }): Promise<{ message: string; token: { access_token: string; refresh_token: string } }> {
        const { exp, id, role } = this.tokenService.decodeToken(token)
        const [access_token, refresh_token] = await Promise.all([
            this.tokenService.signToken({ token: { id, role }, privateKey: this.secretService.KEY_ACCESS_TOKEN, expiresIn: this.secretService.EXPIRES_IN_ACCESS_TOKEN, }),
            this.tokenService.signToken({ token: { id, role, exp }, privateKey: this.secretService.KEY_REFRESH_TOKEN })])
        return {
            message: 'refresh token success',
            token: {
                access_token, refresh_token
            }
        }

    }

}