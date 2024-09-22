/* eslint-disable prettier/prettier */
import { User } from "src/core/entity/auth";
import { MailService } from "src/libs/mail/mail.service";
import { IForgotPassAdapter } from "src/modules/user/adapter";
import { ForbiddenException } from "src/utils/base-exception";
import { Repository } from "typeorm";

export class ForgotPassUseCase implements IForgotPassAdapter {
    constructor(private readonly repository: Repository<User>, private readonly sendMailService:MailService) { }
    async execute({ email }: { email: string; }): Promise<{ message: string; data: any; }> {

        if (!email) throw new ForbiddenException('Không được bỏ trống email')
        const user = await this.repository.findOne({
            where: {
                email
            }
        })
        if (!user) throw new ForbiddenException('user không tồn tại')
        await this.sendMailService.sendUserConfirmation(email,'','http://localhost:3000/reset-password')
        
        return {
            message: 'forgot  password success', data: {}
        }

    }

}