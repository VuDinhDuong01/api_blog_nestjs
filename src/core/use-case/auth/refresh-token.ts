/* eslint-disable prettier/prettier */

import { RefreshToken } from "src/core/entity/refresh-token";
import { SecretAdapter } from "src/libs/secret/adapter";
import { ITokenAdapter } from "src/libs/token/adapter";
import { IRefreshTokenAdapter } from "src/modules/refresh-token/adapter";
import { Repository } from "typeorm";


export class RefreshTokenUseCase implements IRefreshTokenAdapter {
    constructor(private readonly secretService: SecretAdapter, private readonly tokenService: ITokenAdapter, private readonly refreshTokenModel: Repository<RefreshToken>) { }
    async execute(inputBody: { token: string }, inputRequest: any): Promise<{ message: string; token: { access_token: string; refresh_token: string } }> {
        const { exp, id, role } = this.tokenService.decodeToken(inputBody.token)
        const [access_token, refresh_token] = await Promise.all([
            this.tokenService.signToken({ token: { id, role }, privateKey: this.secretService.KEY_ACCESS_TOKEN, expiresIn: this.secretService.EXPIRES_IN_ACCESS_TOKEN, }),
            this.tokenService.signToken({ token: { id, role, exp }, privateKey: this.secretService.KEY_REFRESH_TOKEN }),
            this.refreshTokenModel.delete({
                refresh_token: inputBody.token
            })
        ])
        await this.refreshTokenModel.save({
            refresh_token,
            createdBy: inputRequest.id
        })
        return {
            message: 'refresh token success',
            token: {
                access_token, refresh_token
            }
        }

    }

}