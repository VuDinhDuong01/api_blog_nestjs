import { UserDTO } from "src/Dtos/user.dto";

export abstract class IRegisterAdapter {
    abstract execute(input:Pick<UserDTO,'email'|'password'|'username'>): Promise<Omit<UserDTO,'refresh_token'>>
}

export abstract class ILoginAdapter{
    abstract execute(input:Pick<UserDTO,'email'|'password'>): Promise<UserDTO>
}

export abstract class ILogoutAdapter{
    abstract execute(input:Pick<UserDTO,'refresh_token'>): Promise<UserDTO>
}

export abstract class IGetMeAdapter{
    abstract execute():Promise<UserDTO>
}
