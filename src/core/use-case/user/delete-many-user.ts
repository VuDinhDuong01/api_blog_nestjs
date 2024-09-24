/* eslint-disable prettier/prettier */
import { User } from "src/core/entity/auth";
import { IDeleteManyUserAdapter } from "src/modules/user/adapter";
import { ForbiddenException } from "src/utils/base-exception";
import { Repository } from "typeorm";


export  class DeleteManyUserUseCase implements IDeleteManyUserAdapter{
    constructor(private readonly userModel: Repository<User>){}
    async execute(input): Promise<{ message: string }> {
        if(!input || !Array.isArray(input)) throw new ForbiddenException('Dữ liệu truyền lên không đúng')
        await  this.userModel.delete(input)
        return {
            message:'delete many user success'
        }
    }

}