/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { User } from "src/core/entity/auth";
import { UserDTO } from "src/dtos/user.dto";
import { IGetMeAdapter } from "src/modules/user/adapter";
import { Repository } from "typeorm";

export class GetMeUseCase implements IGetMeAdapter {
    constructor(private readonly userModel: Repository<User>) { }
    async execute(inputRequest: any): Promise<Omit<UserDTO, 'refresh_token' | 'verify' | 'password'>> {
        const user = await this.userModel.findOne({
            where: {
                id: inputRequest.id
            }
        })
        const { password, verify, ...safeUser } = user
        return safeUser
    }
}