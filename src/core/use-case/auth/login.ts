/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { User } from "src/core/entity/auth";
import { RefreshToken } from "src/core/entity/refresh-token";
import { UserDTO } from "src/dtos/user.dto";
import { SecretAdapter } from "src/libs/secret/adapter";
import { ITokenAdapter } from "src/libs/token/adapter";
import { ILoginAdapter, ILoginRes } from "src/modules/auth/adapter";
import { ForbiddenException, NotFoundException } from "src/utils/base-exception";
import { comparePassword } from "src/utils/hash-password";
import { Repository } from "typeorm";


export class LoginUserCase implements ILoginAdapter {
    constructor(
        private readonly repository: Repository<User>,
        private readonly secretService: SecretAdapter,
        private readonly tokenService: ITokenAdapter,
        private readonly ModuleRefreshToken:Repository<RefreshToken>
    ) { }

    async execute(input: Pick<UserDTO, "email" | "password">): Promise<ILoginRes> {
        if (!input.email || !input.password) throw new NotFoundException('Id và token không được bỏ trống')

        const user = await this.repository.findOne({
            where: {
                email: input.email,
            }
        })

        if (!user) throw new NotFoundException('user không tồn tại.')
        if (!comparePassword.compare(input.password, user.password)) throw new ForbiddenException("Mật khẩu bạn nhập chưa đúng.")
        if (user.token) throw new ForbiddenException("Bạn cần xác thực tài khoản trước khi đăng nhập.")

        const [access_token, refresh_token] = await Promise.all(
            [this.tokenService.signToken({ token: { id: user.id, role: user.role }, privateKey: this.secretService.KEY_ACCESS_TOKEN, expiresIn: this.secretService.EXPIRES_IN_ACCESS_TOKEN }),
            this.tokenService.signToken({ token: { id: user.id, role: user.role }, privateKey: this.secretService.KEY_REFRESH_TOKEN, expiresIn: this.secretService.EXPIRES_IN_REFRESH_TOKEN })])
            
        const payloadRefreshToken= {
            refresh_token,
            createdBy: user.id
        }
        await this.ModuleRefreshToken.save(payloadRefreshToken)
        const { verify, password, token, ...safeUser } = user
        return {
            message: 'login success',
            data: safeUser as any,
            token: {
                access_token, refresh_token
            }
        }

    }

}