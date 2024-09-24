/* eslint-disable prettier/prettier */
import { ForbiddenException } from "@nestjs/common";
import { User } from "src/core/entity/auth";
import { IDeleteOneUserAdapter } from "src/modules/user/adapter";
import { Repository } from "typeorm";

export class DeleteUserUseCase implements IDeleteOneUserAdapter{
    constructor(private readonly userModel: Repository<User>){}
    
   async  execute<T>(input: T): Promise<{ message: string; }> {
        if(!input) throw new ForbiddenException()

        await this.userModel.delete(input)

        return {
            message:'delete user success'
        }
    }

}