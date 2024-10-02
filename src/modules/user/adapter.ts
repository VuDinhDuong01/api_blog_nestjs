/* eslint-disable prettier/prettier */
import { UserDTO } from "src/dtos/user.dto";

export abstract class IGetMeAdapter {
    abstract execute<T>(input: T): Promise<Omit<UserDTO, 'refresh_token' | 'password' | 'verify'>>
}

export abstract class IUpdateUserAdapter {
    abstract execute<T, P,K>(inputBody: T, inputParam: P,inputRequest:K): Promise<{
        message:string ,
        data:Omit<UserDTO, 'refresh_token' | 'verify' | 'password'>
    }>
}

export abstract class ILogoutAdapter {
    abstract execute<T extends { refresh_token: string }>(input: T): Promise<{message: string}>
}

export  abstract class IDeleteOneUserAdapter{
    abstract execute<T>(input: T):Promise<{message: string }>
}

export abstract class IDeleteManyUserAdapter{
    abstract execute<T>(input:T):Promise<{message: string }>
}

export abstract class IImportUserAdapter{
    abstract execute<T>(input:T):Promise<any>
}