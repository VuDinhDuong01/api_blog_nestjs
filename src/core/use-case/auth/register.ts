/* eslint-disable prettier/prettier */
import { Repository } from "typeorm";
import { BadRequestException } from "@nestjs/common";

import { User } from "src/core/entity/auth";
import { IRegisterAdapter } from "src/modules/auth/adapter";
import { UserDTO } from "src/dtos/user.dto";
import { MailService } from "src/libs/mail/mail.service";
import { randomOtp } from "src/utils/random-otp";
import { comparePassword } from "src/utils/hash-password";
export class RegisterUserCase implements IRegisterAdapter {

    constructor(
        private readonly repository: Repository<User>,
        private readonly sendMail: MailService
    ) { }
    async execute(input: Pick<UserDTO, "email" | "password" | "username">): Promise<{
        message: string,
        data: {
            id: string
        }
    }> {

        const checkEmailExist = await this.repository.findOne({
            where: {
                email: input.email
            }
        })

        if (checkEmailExist) {
            throw new BadRequestException('Email đã tồn tại')
        }
        const otp = randomOtp()
        // await this.sendMail.sendUserConfirmation(input.email, otp, '')
        const payload = {
            ...input,
            password: comparePassword.hash(input.password),
            token: otp,
            createdBy:input.email
        }
        const response = await this.repository.save(payload)

        return {
            message: 'register success',
            data: {
                id: response.id
            }
        }
    }
}