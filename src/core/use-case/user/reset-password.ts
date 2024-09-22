/* eslint-disable prettier/prettier */
import { User } from "src/core/entity/auth";
import { ResetPassDTO } from "src/dtos/user.dto";
import { MailService } from "src/libs/mail/mail.service";
import { IForgotPassAdapter, IResetPassAdapter } from "src/modules/auth/adapter";
import { ForbiddenException } from "src/utils/base-exception";
import { comparePassword } from "src/utils/hash-password";
import { Repository } from "typeorm";

export class ForgotPassUseCase implements IForgotPassAdapter {
    constructor(private readonly repository: Repository<User>, private readonly sendMailService: MailService) { }
    async execute({ email }: { email: string; }): Promise<{ message: string; data: any }> {

        if (!email) throw new ForbiddenException('Không được bỏ trống email')
        const user = await this.repository.findOne({
            where: {
                email
            }
        })
        if (!user) throw new ForbiddenException('user không tồn tại')
        await this.sendMailService.sendUserConfirmation(email, '', 'http://localhost:3000/reset-password')

        return {
            message: 'forgot  password success',
            data: {
                email
            }
        }

    }

}

export class ResetPassUseCase implements IResetPassAdapter {
    constructor(private readonly repository: Repository<User>) { }
    async execute(input: ResetPassDTO): Promise<{ message: string; data: any; }> {
        if (input.newPass !== input.confirmPass) throw new ForbiddenException('Bạn nhập lại mật khẩu sai.')
        const user = await this.repository.findOne({ where: { email: input.email } })
        if (!user) throw new ForbiddenException('User không tồn tại.')
        const payload = {
            ...user,
            password: comparePassword.hash(input.newPass),
            updatedAt: new Date()
        }

        await this.repository.save(payload)

        return {
            message: 'reset password success',
            data: {}
        }

    }

}