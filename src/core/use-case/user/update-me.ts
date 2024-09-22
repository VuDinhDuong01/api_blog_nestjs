/* eslint-disable prettier/prettier */
import { User } from "src/core/entity/auth";
import { UserDTO } from "src/dtos/user.dto";
import { IUpdateUserAdapter } from "src/modules/user/adapter";
import { Repository } from "typeorm";

export class UpdateUserUseCase implements IUpdateUserAdapter {
    constructor(private readonly userModel: Repository<User>) { }
    async execute(inputBody, inputParam, inputRequest): Promise<{
        message: string , data:Omit<UserDTO, 'refresh_token' | 'verify' | 'password'>
    }> {
        const user = await this.userModel.findOne({
            where: {
                id: inputParam.id
            }
        })
        const payload = Object.assign(user, inputBody, { updateAt: inputRequest.id })
        await this.userModel.save(payload)
        return {
            message:'update success',
            data:payload
        }
    }
}