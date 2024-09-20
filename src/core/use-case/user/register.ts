/* eslint-disable prettier/prettier */
import { Repository } from "typeorm";
import { BadRequestException } from "@nestjs/common";

import { User } from "src/core/entity/auth";
import { IRegisterAdapter } from "src/modules/user/adapter";
import { UserDTO } from "src/Dtos/user.dto";
export class RegisterUserCase implements IRegisterAdapter {

    constructor(
        private readonly repository: Repository<User>,
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
        const response = await this.repository.save(input)
        return {
            message: 'register success',
            data: {
                id: response.id
            }
        }
    }
}