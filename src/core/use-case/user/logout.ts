/* eslint-disable prettier/prettier */
import { RefreshToken } from "src/core/entity/refresh-token";
import { ILogoutAdapter } from "src/modules/user/adapter";
import { Repository } from "typeorm";

export class LogoutUseCase implements ILogoutAdapter {
    constructor(private readonly refreshTokenModel: Repository<RefreshToken>) { }
    async execute<T extends { refresh_token: string }>(inputBody: T): Promise<{ message: string; }> {
        await this.refreshTokenModel.delete({
            refresh_token: inputBody.refresh_token
        })
        return {
            message: 'logout success'
        }
    }

}

