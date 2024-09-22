/* eslint-disable prettier/prettier */
import { ResetPassDTO, UserDTO } from "src/Dtos/user.dto";

export interface ILoginRes {
    message: string,
    data: Omit<UserDTO, 'password' | 'verify'>,
    token: {
        access_token: string,
        refresh_token: string
    }
}
export abstract class IRegisterAdapter {
    abstract execute(input: Pick<UserDTO, 'email' | 'password' | 'username'>): Promise<{
        message: string,
        data: {
            id: string
        }
    }>
}

export abstract class ILoginAdapter {
    abstract execute(input: Pick<UserDTO, 'email' | 'password'>): Promise<ILoginRes>
}

export abstract class ILogoutAdapter {
    abstract execute(input: Pick<UserDTO, 'refresh_token'>): Promise<UserDTO>
}

export abstract class IGetMeAdapter {
    abstract execute(): Promise<UserDTO>
}

export abstract class IVerifyEmailAdapter {
    abstract execute({ id, token }: { id: string, token: string }): Promise<{ message: string }>
}

export abstract class IRefreshTokenAdapter {
    abstract execute({ token }: { token: string }): Promise<{
        message: string,
        token: {
            access_token: string
            refresh_token: string
        }
    }>
}

export abstract class IForgotPassAdapter {
    abstract execute({ email }: { email: string }): Promise<{
        message: string,
        data: any
    }>
}

export abstract class IResetPassAdapter {
    abstract execute(input:ResetPassDTO): Promise<{
        message: string,
        data: any
    }>
}

