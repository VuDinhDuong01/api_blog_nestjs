import { Repository } from "typeorm";

import { User } from "src/core/entity/auth";
import { IRegisterAdapter } from "src/modules/user/adapter";
import { UserDTO } from "src/Dtos/user.dto";
import { HttpException, HttpStatus } from "@nestjs/common";
export class RegisterUserCase implements IRegisterAdapter {

    constructor(
        private readonly repository: Repository<User>,
    ) { }
    async execute(input: Pick<UserDTO, "email" | "password" | "username">): Promise<Omit<UserDTO, 'refresh_token'>> {
        console.log(input.email)

        const checkEmailExsis = await this.repository.findOne({
            where: {
                email: input.email
            }
        })
        console.log(checkEmailExsis)
        if (checkEmailExsis) {
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }
        const response = await this.repository.create(input)
        return response
    }
}