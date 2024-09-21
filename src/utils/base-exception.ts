/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus } from "@nestjs/common";

export class BaseException extends HttpException{
    readonly parameters?: string 
    constructor(message: string, status:HttpStatus,parameters?:string ,  ){
        super(message,status)
        if(parameters){
            this.parameters= parameters
        }
    }
}

export class NotFoundException extends BaseException{
    constructor(message: string){
        super(message ?? 'Not found',404)
    }
}

export class ConflictException extends BaseException {
    constructor(message: string){
        super(message ?? 'Conflict', 409)
    }
}

export class BadRequestException extends BaseException {
    constructor(message: string){
        super(message ?? 'Bad request', 400)
    }
}

export class UNAUTHORIZEDException extends BaseException {
    constructor(message: string){
        super(message ?? 'UNAUTHORIZED', 401)
    }
}