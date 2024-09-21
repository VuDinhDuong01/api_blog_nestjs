/* eslint-disable prettier/prettier */

import { User } from "src/core/entity/auth";
import { IVerifyEmailAdapter } from "src/modules/user/adapter";
import { ForbiddenException, NotFoundException } from "src/utils/base-exception";
import { Repository } from "typeorm";


export class VerifyEmailUseCase implements IVerifyEmailAdapter {
    constructor(private readonly repository: Repository<User>) { }

    async execute({ id, token }: { id: string, token: string }): Promise<{ message: string; }> {
        if (!id || !token) {
            throw new NotFoundException('Id và token không được bỏ trống')
        }
        const user = await this.repository.findOne({
            where: {
                id
            }
        })
        if (!user) throw new NotFoundException('user không tồn tại')
        const fiveMinutesInMillis = 1 * 60 * 1000;
        const currentTime = new Date()
        if ((currentTime > (new Date(user.createdAt.getTime() + fiveMinutesInMillis))) ) {
            // xóa user 
            await this.repository.delete(id)
            throw new ForbiddenException("token đã hết hạn")
        }
        if(token !== user.token){
            throw new ForbiddenException("token bạn nhập chưa đúng.")
        }
        Object.assign(user, { token: '', updatedAt: new Date() , verify:1})
        await this.repository.save(user)
        return {
            message: 'verify token success'
        }
    }

}