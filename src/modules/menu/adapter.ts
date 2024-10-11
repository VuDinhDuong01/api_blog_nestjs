/* eslint-disable prettier/prettier */

import { IToken, MenuDTO } from "src/dtos/menu.dto";
import { BodyGeneralProps } from "src/types/general.types";


export abstract class CreateMenuAdapter {
    abstract execute(input: MenuDTO, user: IToken): Promise<any>
}

export abstract class UpdateMenuAdapter {
    abstract execute(input:MenuDTO, user:IToken, id: string ): Promise<any>
}

export abstract class DeleteMenuAdapter {
    abstract execute(input: string): Promise<{message: string }>
}

export  abstract class GetAllMenuAdapter {
    abstract  execute(input : BodyGeneralProps):Promise<any>
}

export abstract class GetMenuAdapter{
    abstract execute(input: string ):Promise<any>
}